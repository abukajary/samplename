
export type Policy = {
  id: string;  
  title: string;
  lastUpdate: string;
  content: string; 
};

export const policiesData: Policy[] = [
  {
    id: 'privacy-policy',
    title: 'Privacy policy',
    lastUpdate: '6/12/2024',
    content: `
      <p>Dentsu is a global media, creative and customer experience management group made up of several brands. We help our clients to improve how they advertise and market, whether by print, post, email or in the digital world. We believe that the responsible use of data supports business growth and builds strong relationships between brand and consumer. As a business, we are committed to respecting and protecting the privacy of all individuals we interact with.</p>
      <p><strong>Who is responsible for processing your Personal Data?</strong></p>
      <p>dentsu does business through its subsidiaries and affiliates worldwide. The privacy laws in some countries require a Controller to be selected.</p>
      <ul class="bullet">
        <li>If you are a dentsu employee, find our notice <a href="#">here</a>;</li>
        <li>If looking for cookies, consult our <a href="#">Cookie Notice</a>.</li>
      </ul>
      <h3>1. Personal Data we may collect</h3>
      <p>We may process Personal Data you provide directly to us, including contact data and marketing preferences.</p>
      `
  },
  {
    id: 'modern-slavery-act',
    title: 'Modern Slavery Act',
    lastUpdate: '1/10/2024',
    content: `
      <p>This is the Modern Slavery Act statement...</p>
      `
  },
  {
    id: 'accessibility',
    title: 'Accessibility',
    lastUpdate: '1/10/2024',
    content: `
      <p>This is the Accessibility statement...</p>
      `
  },
  {
    id: 'interest-based-advertising-notice',
    title: 'Interest-based advertising notice',
    lastUpdate: '1/10/2024',
    content: `
      <p>This is the Interest-based advertising notice statement...</p>
      `
  },
  {
    id: 'terms-and-conditions',
    title: 'Terms And Conditions',
    lastUpdate: '1/10/2024',
    content: `
      <p>This is the Terms And Conditions statement...</p>
      `
  },
  {
    id: 'cookie-policy',
    title: 'Cookie Policy',
    lastUpdate: '1/10/2024',
    content: `
      <p>This is the Cookie Policy statement...</p>
      `
  }
];