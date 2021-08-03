import './WhoWeAre.css';

export default function WhoWeAre({ name }) {
  return (
    <section className='WhoWeAre page-content page-single'>
      <p className='mp-title'>{name}</p>
      <div className='mp-content-container'>
        <p className='mp-content-text wwa-story'>
          Gates Enterprises LLC is committed to providing our customers with an
          unparalleled level of expertise and customer service in all our
          re-roofing projects. We are a small team hand picked for their
          expertise in exteriors construction and insurance claim management.
          <br />
          <br /> If you are overwhelmed or stressed about hail damage to your
          property; or simply have high expectations for anyone providing work
          or services on your largest investment; you have found the most
          equipped company for the job. Call or email us now for a complimentary
          and honest inspection at your property.
        </p>
      </div>
    </section>
  );
}
