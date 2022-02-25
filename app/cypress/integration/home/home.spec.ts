/// <reference types="cypress" />

import activity from "../../fixtures/activity";
import { hotels, scenicspots, restaurants } from "../../fixtures/card";

const activityApi =
  "https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity?$orderby=StartTime%20desc&$top=4&$format=JSON";
const scenicSpotApi =
  "https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$top=10&$format=JSON";
const hotelApi =
  "https://ptx.transportdata.tw/MOTC/v2/Tourism/Hotel?$orderby=ZipCode&$top=10&$format=JSON";
const restaurantApi =
  "https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant?$top=10&$format=JSON";

describe("Home Page", async () => {
  before(() => {
    cy.intercept(activityApi, activity);
    cy.intercept(scenicSpotApi, scenicspots);
    cy.intercept(restaurantApi, restaurants);
    cy.intercept(hotelApi, hotels);
    cy.visit("/");
  });

  it("header navbar", () => {
    cy.get("header").should("contain", "景點");
    cy.get("header").should("contain", "活動");
    cy.get("header").should("contain", "美食");
    cy.get("header").should("contain", "住宿");
    cy.get("header").should("contain", "交通");
  });

  it("activity", () => {
    cy.get(".container > h2").eq(1).should("contain", "熱門活動");
    cy.get("[data-testid=activityCard]").first().should("contain", "Name1");
    cy.get("[data-testid=activityCard]").eq(1).should("contain", "Name2");
  });

  it("Scenic spot", () => {
    cy.get(".container > h2").eq(2).should("contain", "觀光景點");
    cy.get(".container > div > [data-testid=card]")
      .first()
      .should("contain", "scenicspot1");
    cy.get(".container > div > [data-testid=card]")
      .eq(1)
      .should("contain", "scenicspot2");
  });

  it("Restaurant", () => {
    cy.get(".container > h2").eq(3).should("contain", "熱門餐飲");
    cy.get(".container > div > [data-testid=card]")
      .eq(2)
      .should("contain", "restaurant1");
    cy.get(".container > div > [data-testid=card]")
      .eq(3)
      .should("contain", "restaurant2");
  });

  it("Hotel", () => {
    cy.get(".container > h2").eq(4).should("contain", "推薦住宿");
    cy.get(".container > div > [data-testid=card]")
      .eq(4)
      .should("contain", "hotel1");
    cy.get(".container > div > [data-testid=card]")
      .eq(5)
      .should("contain", "hotel2");
  });

  it("city", () => {
    cy.visit("/");
    cy.get(".container > h2").eq(0).should("contain", "熱門城市");
    cy.get('a:contains("臺北市")').click({ force: true });
    cy.url().should("eq", "http://localhost:3000/Taipei");
  });

  it("header navbar - link Scenic Spot", () => {
    cy.get("header > nav > ul > :nth-child(1) > a").click();
    cy.url().should("eq", "http://localhost:3000/scenicspot");
  });

  it("header navbar - link Activity", () => {
    cy.get("header > nav > ul > :nth-child(2) > a").click();
    cy.url().should("eq", "http://localhost:3000/activity");
  });

  it("header navbar - link Restaurant", () => {
    cy.get("header > nav > ul > :nth-child(3) > a").click();
    cy.url().should("eq", "http://localhost:3000/restaurant");
  });

  it("header navbar - link Hotel", () => {
    cy.get("header > nav > ul > :nth-child(4) > a").click();
    cy.url().should("eq", "http://localhost:3000/hotel");
  });

  it("header navbar - link Traffic", () => {
    cy.get("header > nav > ul > :nth-child(5) > a").click();
    cy.url().should("eq", "http://localhost:3000/traffic");
  });
});
