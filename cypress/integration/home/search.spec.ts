/// <reference types="cypress" />

import activity from "../../fixtures/activity";
import { hotels, scenicspots, restaurants } from "../../fixtures/card";

const activityKeywordApi =
  "https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity?$filter=contains(ActivityName%2C%27%E9%9F%B3%E6%A8%82%E7%A5%AD%27)&$orderby=StartTime%20desc&$top=10&$format=JSON";
const scenicSpotKeywordApi =
  "https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$filter=contains(ScenicSpotName%2C%27%E9%9F%B3%E6%A8%82%E7%A5%AD%27)&$top=10&$format=JSON";
const hotelKeywordApi =
  "https://ptx.transportdata.tw/MOTC/v2/Tourism/Hotel?$filter=contains(HotelName%2C%27%E9%9F%B3%E6%A8%82%E7%A5%AD%27)&$orderby=ZipCode%20desc&$top=10&$format=JSON";
const restaurantKeywordApi =
  "https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant?$filter=contains(RestaurantName%2C%27%E9%9F%B3%E6%A8%82%E7%A5%AD%27)&$top=10&$format=JSON";

describe("Search Page", async () => {
  before(() => {});

  beforeEach(() => {
    cy.visit("/");
    cy.intercept(activityKeywordApi, activity);
    cy.intercept(scenicSpotKeywordApi, scenicspots);
    cy.intercept(restaurantKeywordApi, restaurants);
    cy.intercept(hotelKeywordApi, hotels);
    cy.get('[data-testid=banner] > div > div > div > input[type="text"]')
      .first()
      .type("音樂祭", { force: true });
    cy.get("[data-testid=banner] > div > div > div > button")
      .first()
      .click({ force: true });
  });

  it("URL", () => {
    cy.url().should(
      "eq",
      "http://localhost:3000/search?q=%E9%9F%B3%E6%A8%82%E7%A5%AD"
    );
  });

  it("Activity", () => {
    cy.get(".container > h2").eq(0).should("contain", "熱門活動");
    cy.get("[data-testid=activityCard]").first().should("contain", "Name1");
    cy.get("[data-testid=activityCard]").eq(1).should("contain", "Name2");
  });

  it("Scenic Spot", () => {
    cy.get(".container > h2").eq(1).should("contain", "觀光景點");
    cy.get(".container > div > [data-testid=card]")
      .first()
      .should("contain", "scenicspot1");
    cy.get(".container > div > [data-testid=card]")
      .eq(1)
      .should("contain", "scenicspot2");
  });

  it("Restaurant", () => {
    cy.get(".container > h2").eq(2).should("contain", "熱門餐飲");
    cy.get(".container > div > [data-testid=card]")
      .eq(2)
      .should("contain", "restaurant1");
    cy.get(".container > div > [data-testid=card]")
      .eq(3)
      .should("contain", "restaurant2");
  });

  it("Hotel", () => {
    cy.get(".container > h2").eq(3).should("contain", "推薦住宿");
    cy.get(".container > div > [data-testid=card]")
      .eq(4)
      .should("contain", "hotel1");
    cy.get(".container > div > [data-testid=card]")
      .eq(5)
      .should("contain", "hotel2");
  });

  it("No data", () => {
    cy.visit("/");
    cy.intercept(activityKeywordApi, []);
    cy.intercept(scenicSpotKeywordApi, []);
    cy.intercept(restaurantKeywordApi, []);
    cy.intercept(hotelKeywordApi, []);
    cy.get('[data-testid=banner] > div > div > div > input[type="text"]')
      .first()
      .type("音樂祭", { force: true });
    cy.get("[data-testid=banner] > div > div > div > button")
      .first()
      .click({ force: true });
    cy.contains("很抱歉，找不到符合此搜尋相關的內容。");
  });
});
