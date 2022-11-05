// components
import SubTitle from '../common/SubTitle';
import ActivityCardCollection from './ActivityCardCollection';
import Modal from 'components/common/Modal';
import Container from 'components/common/Container';

interface ActivitiesProps {
  city?: string | null;
  defaultCount?: number;
  keyword?: string | null;
}

const Activities = ({ city, defaultCount, keyword }: ActivitiesProps) => {
  return (
    <Container>
      <SubTitle subTitle="熱門活動" icon="triangle" />
      <ActivityCardCollection
        city={city}
        defaultCount={defaultCount}
        keyword={keyword}
      />
      <Modal />
    </Container>
  );
};

export default Activities;
