import '../../../css/Sofa4.scss';
import EventBannerItem from './EventBannerItem';

interface EventItem {
  title: string;
  description: string;
  image: string;
}

interface EventBannerProps {
  data: EventItem[];
  cls?: string;
}

const EventBanner: React.FC<EventBannerProps> = ({ data, cls = '' }) => {
  return (
    <section className={`${cls} background-image5`}>
      <div className="flex justify-center absolute top-[30%] left-[13%] gap-[5%]">
        {data.map((item, idx) => (
          <div key={idx}>
            <EventBannerItem item={item} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventBanner;