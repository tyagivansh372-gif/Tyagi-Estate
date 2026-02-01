export default {
  name: 'property',
  title: 'Property Listings',
  type: 'document',
  fields: [
    // 1. Basic Identification
    {
      name: 'title',
      title: 'Property Title',
      type: 'string',
      description: 'e.g., Luxury Villa in Tyagi Enclave',
      validation: (Rule) => Rule.required().error('A title is required to generate the page link.')
    },
    {
      name: 'slug',
      title: 'Slug (Automated Page Link)',
      type: 'slug',
      options: {
        source: 'title', // Automatically pulls from the Title field
        maxLength: 96,
        isUnique: (slug, context) => context.defaultIsUnique(slug, context),
      },
      description: 'Click "Generate" to create the unique URL for this listing.',
      // Automation: This prevents the "null" error by making the slug mandatory for publishing
      validation: (Rule) => Rule.required().error('You must generate a slug before publishing to avoid a 404 error.')
    },

    // 2. Location & Branding
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'The city or area.'
    },
    {
      name: 'landmark',
      title: 'Landmark',
      type: 'string',
      description: 'e.g., Near Haridwar Dehradun Highway.'
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      initialValue: 'For Sale',
      options: {
        list: [
          { title: 'For Sale', value: 'For Sale' },
          { title: 'New Launch', value: 'New Launch' },
          { title: 'Sold Out', value: 'Sold Out' },
          { title: 'Upcoming', value: 'Upcoming' },
        ],
      },
      description: 'Current availability of the site.'
    },

    // 3. Media (Photos & Video)
    {
      name: 'mainImage',
      title: 'Main Feature Image',
      type: 'image',
      options: { hotspot: true },
      description: 'The primary photo shown on the listing card.',
      validation: (Rule) => Rule.required().error('A main image is required for the portfolio display.')
    },
    {
      name: 'gallery',
      title: 'Image Gallery',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      description: 'Add multiple high-quality photos for the automated slider.'
    },
    {
      name: 'videoTour',
      title: 'Short Video Tour',
      type: 'file',
      options: { accept: 'video/*' },
      description: 'Upload a short MP4 walk-through for the automated video player.'
    },

    // 4. Technical Details
    {
      name: 'details',
      title: 'Property Details',
      type: 'object',
      fields: [
        { name: 'bedrooms', title: 'Bedrooms (BHK)', type: 'number' },
        { name: 'bathrooms', title: 'Bathrooms', type: 'number' },
        { name: 'area', title: 'Total Area (Sq. Ft.)', type: 'number' },
      ],
      description: 'Technical specs shown automatically in the detail page grid.'
    },

    // 5. Pricing (Optional display)
    {
      name: 'price',
      title: 'Price (Internal Reference)',
      type: 'string',
      description: 'The website will still show "Price on Request" to encourage WhatsApp inquiries.'
    }
  ]
}