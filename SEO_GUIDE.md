# Carey Electrical - SEO Implementation Guide

## Overview
This document outlines all SEO optimizations implemented for the Carey Electrical website and provides guidance for maintaining and improving search engine visibility.

## Implemented SEO Features

### 1. Technical SEO

#### Meta Tags (index.html)
- **Title Tag**: Optimized with primary keywords and location
- **Meta Description**: Compelling 155-character description with call-to-action
- **Keywords Meta Tag**: Targeted local and service keywords
- **Robots Meta**: Configured for optimal indexing
- **Author**: Brand attribution
- **Theme Color**: Brand color for mobile browsers

#### Open Graph Tags (Social Media)
- **og:title**: Optimized for social sharing
- **og:description**: Engaging description for previews
- **og:type**: website/article based on content type
- **og:image**: High-quality logo image
- **og:site_name**: Brand consistency
- **og:locale**: UK English (en_GB)

#### Twitter Card Tags
- **twitter:card**: summary_large_image for rich previews
- **twitter:title**: Optimized title
- **twitter:description**: Compelling description
- **twitter:image**: Brand logo
- **twitter:site**: Social handle

#### Performance Optimizations
- **Preconnect Links**: DNS prefetch for external resources
- **Lazy Loading**: Images load only when needed
- **Resource Hints**: Optimized loading sequence

### 2. Structured Data (Schema.org)

#### Home Page Schema
```json
{
  "@type": "LocalBusiness",
  "name": "Carey Electrical",
  "description": "MCS certified solar panel installers...",
  "openingHoursSpecification": [...],
  "areaServed": [...],
  "hasOfferCatalog": {...},
  "aggregateRating": {...}
}
```

#### Service Pages Schema
- **BreadcrumbList**: Navigation hierarchy
- **Service**: Detailed service information
- **Offer**: Price specifications
- **LocalBusiness**: Provider details

#### Location Pages Schema
- **LocalBusiness**: Location-specific business info
- **FAQPage**: FAQ structured data for rich results
- **BreadcrumbList**: Navigation path

#### Blog Posts Schema
- **BlogPosting**: Article metadata
- **Author**: Author information
- **Publisher**: Organization details
- **BreadcrumbList**: Content hierarchy

### 3. Site Infrastructure

#### robots.txt
Located at `/public/robots.txt`
- Allows all search engines
- Points to sitemap
- Blocks sensitive areas

#### sitemap.xml
Located at `/public/sitemap.xml`
- Lists all major pages
- Includes service pages
- Location pages included
- Priority and change frequency set

#### _redirects
Ensures SPA routing works with direct URL access

#### manifest.json
PWA manifest for mobile optimization
- App name and description
- Theme colors
- Icons configuration

### 4. Content Optimization

#### Heading Hierarchy
- **H1**: Single H1 per page with primary keyword
- **H2**: Section headings with semantic meaning
- **H3-H6**: Proper nesting throughout

#### Image Optimization
- **Alt Text**: Descriptive, keyword-rich alt attributes
- **Lazy Loading**: Below-the-fold images load on demand
- **Proper Sizing**: Images optimized for display size

#### Internal Linking
- Related services cross-linked
- Location pages interconnected
- Blog posts link to relevant services
- Footer contains comprehensive site map

### 5. Dynamic SEO (useSEO Hook)

The enhanced `useSEO` hook in `UIComponents.tsx` automatically manages:
- Page titles with brand suffix
- Meta descriptions
- Keywords (page-specific)
- Open Graph tags
- Twitter Cards
- Structured data injection
- Canonical URLs

#### Usage Example
```typescript
useSEO(
  "Service Title",
  "Description for search results",
  schemaObject,
  imageUrl,
  'website' | 'article',
  "keyword1, keyword2, keyword3"
);
```

## SEO Best Practices for Content Updates

### Adding New Service Pages
1. Create detailed service description (300+ words)
2. Include location-specific keywords
3. Add relevant FAQ section
4. Include high-quality images with alt text
5. Link to related services
6. Update sitemap.xml

### Adding New Location Pages
1. Write unique content for each location (no duplicates)
2. Include local landmarks and area-specific info
3. Add location-specific FAQs
4. Include map integration
5. Link to nearby locations
6. Update sitemap.xml

### Writing Blog Posts
1. Target specific keywords in title
2. Use descriptive meta descriptions
3. Include relevant images with alt text
4. Internal links to services
5. Proper heading hierarchy (H2, H3)
6. Add tags/categories
7. Update sitemap.xml

### Image Guidelines
- **Format**: WebP preferred, fallback to JPEG/PNG
- **Size**: Compress images (under 200KB ideal)
- **Dimensions**: Use appropriate sizes (1200x630 for OG images)
- **Alt Text**: Describe image content + keyword when natural
- **File Names**: Use descriptive names (solar-panel-installation-newbury.jpg)

## Local SEO Optimization

### Current Implementation
- **Google Business Profile**: Ensure NAP (Name, Address, Phone) consistency
- **Local Keywords**: Each location page targets city/town name
- **Service Areas**: Clearly defined in schema
- **Reviews**: Schema includes aggregate ratings

### Recommendations for Ongoing Optimization
1. **Claim and optimize Google Business Profile**
   - Add photos regularly
   - Respond to reviews
   - Post updates

2. **Build Local Citations**
   - Ensure consistent NAP across directories
   - List on industry-specific directories
   - Local business directories (Yell, Thomson Local)

3. **Generate Reviews**
   - Request reviews from satisfied customers
   - Respond to all reviews (positive and negative)
   - Display reviews on website

4. **Create Location-Specific Content**
   - Write about local projects
   - Mention local landmarks
   - Cover local solar incentives

## Keyword Strategy

### Primary Keywords
- Solar panels Berkshire
- Solar installation Newbury
- Battery storage Reading
- EV charging Basingstoke
- MCS certified installer
- Tesla Powerwall installer

### Long-Tail Keywords
- Solar panel installation cost Berkshire
- Best solar installers Newbury
- Tesla Powerwall installation Reading
- Commercial solar panels Basingstoke
- Solar panel grants UK
- Battery storage systems for home

### Location-Based Keywords
Each location page targets:
- Solar panels [City Name]
- Solar installers [City Name]
- Battery storage [City Name]
- Solar panel cost [City Name]

## Performance Monitoring

### Key Metrics to Track
1. **Google Search Console**
   - Impressions and clicks
   - Average position
   - Click-through rate (CTR)
   - Core Web Vitals

2. **Google Analytics**
   - Organic traffic
   - Bounce rate
   - Time on page
   - Conversion rate from organic

3. **Local SEO Metrics**
   - Google Business Profile views
   - Direction requests
   - Phone calls from search

### Tools to Use
- Google Search Console
- Google Analytics
- Google Business Profile Insights
- PageSpeed Insights
- Schema Markup Validator
- Rich Results Test

## Technical SEO Checklist

### Monthly Tasks
- [ ] Check for crawl errors in Search Console
- [ ] Review and update sitemap if needed
- [ ] Check page load speeds
- [ ] Review top performing pages
- [ ] Analyze keyword rankings

### Quarterly Tasks
- [ ] Audit site content for freshness
- [ ] Update outdated information
- [ ] Review and optimize meta descriptions
- [ ] Check for broken internal/external links
- [ ] Analyze competitor strategies
- [ ] Review and update schema markup

### Annual Tasks
- [ ] Comprehensive SEO audit
- [ ] Review and update keyword strategy
- [ ] Analyze backlink profile
- [ ] Review site architecture
- [ ] Update content strategy

## Common SEO Issues to Avoid

1. **Duplicate Content**
   - Each location page must have unique content
   - Avoid copying service descriptions
   - Create unique meta descriptions

2. **Missing Alt Text**
   - All images must have descriptive alt text
   - Include keywords naturally

3. **Broken Links**
   - Regularly check for 404 errors
   - Update internal links when pages change

4. **Slow Page Load**
   - Compress images
   - Minimize JavaScript
   - Use CDN when possible

5. **Missing Structured Data**
   - Ensure all new pages include appropriate schema
   - Validate with Google's Rich Results Test

## Future SEO Enhancements

### Recommended Additions
1. **Video Content**
   - Add VideoObject schema
   - Create installation time-lapse videos
   - Customer testimonial videos

2. **FAQ Pages**
   - Dedicated FAQ page with FAQ schema
   - Target question-based keywords

3. **Blog Content Strategy**
   - Regular blog posts (2-4 per month)
   - Target informational keywords
   - Cover industry news and updates

4. **Link Building**
   - Guest posts on industry blogs
   - Partnerships with complementary businesses
   - Local business associations

5. **Technical Improvements**
   - Implement Service Worker for PWA
   - Add offline functionality
   - Improve Core Web Vitals scores

## Resources

### Validation Tools
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema Markup Validator](https://validator.schema.org/)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Google Search Console](https://search.google.com/search-console)

### Documentation
- [Google Search Central](https://developers.google.com/search)
- [Schema.org Documentation](https://schema.org/)
- [Moz SEO Learning Center](https://moz.com/learn/seo)
- [Ahrefs Blog](https://ahrefs.com/blog/)

---

## Support

For questions about SEO implementation or updates, refer to this guide and use the validation tools listed above. Regular monitoring and updates will ensure continued search engine visibility and organic traffic growth.
