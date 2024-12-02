import { INews } from "./news.model";

export const newsArticles: INews[] = [
    {
      id: 1,
      headline: 'Global Markets Rally Amid Economic Optimism',
      article: 'Stock markets worldwide saw a significant surge today as investors expressed confidence in economic recovery...',
      categoryId: 2,
      publicationInfo: {
        publisher: 'Financial Times',
        datePublished: '2024-12-01'
      }
    },
    {
      id: 2,
      headline: 'Tech Giants Unveil Latest Innovations at Annual Conference',
      article: 'The world’s leading technology companies showcased their cutting-edge products, ranging from AI-driven solutions to next-gen hardware...',
      categoryId: 3,
      publicationInfo: {
        publisher: 'TechCrunch',
        datePublished: '2024-11-30'
      }
    },
    {
      id: 3,
      headline: 'New Healthcare Reforms Aim to Improve Accessibility',
      article: 'The government announced a series of reforms designed to make healthcare more affordable and accessible for all citizens...',
      categoryId: 4,
      publicationInfo: {
        publisher: 'Health Daily',
        datePublished: '2024-11-29'
      }
    },
    {
      id: 4,
      headline: 'Breakthrough Discovery in Renewable Energy Research',
      article: 'Scientists have developed a new method to harness solar energy more efficiently, potentially revolutionizing the renewable energy sector...',
      categoryId: 5,
      publicationInfo: {
        publisher: 'Science Journal',
        datePublished: '2024-11-28'
      }
    },
    {
      id: 5,
      headline: 'National Team Wins Championship in Thrilling Finale',
      article: 'In an unforgettable match, the national team secured victory, sparking celebrations across the country...',
      categoryId: 6,
      publicationInfo: {
        publisher: 'Sports Weekly',
        datePublished: '2024-11-27'
      }
    },
    {
      id: 6,
      headline: 'New Political Reforms Spark Debate Among Lawmakers',
      article: 'Recent reforms proposed in parliament have ignited a fierce debate among lawmakers regarding their potential impact...',
      categoryId: 1,
      publicationInfo: {
        publisher: 'The Political Observer',
        datePublished: '2024-11-26'
      }
    },
    {
      id: 7,
      headline: 'Major Studio Releases Blockbuster Movie Sequel',
      article: 'Fans are flocking to cinemas as a major studio releases the highly anticipated sequel to its blockbuster franchise...',
      categoryId: 7,
      publicationInfo: {
        publisher: 'Entertainment Daily',
        datePublished: '2024-11-25'
      }
    },
    {
      id: 8,
      headline: 'International Leaders Convene to Address Climate Change',
      article: 'World leaders gathered today to discuss pressing environmental issues, with a focus on reducing carbon emissions...',
      categoryId: 9,
      publicationInfo: {
        publisher: 'Global News Network',
        datePublished: '2024-11-24'
      }
    },
    {
      id: 9,
      headline: 'Lifestyle Trends for the Upcoming Year',
      article: 'Experts predict that sustainability, wellness, and minimalism will dominate lifestyle trends in the coming year...',
      categoryId: 10,
      publicationInfo: {
        publisher: 'Lifestyle Today',
        datePublished: '2024-11-23'
      }
    },
    {
      id: 10,
      headline: 'Diplomatic Tensions Rise Between Key Nations',
      article: 'Tensions have escalated between two major countries, raising concerns about the potential for diplomatic fallout...',
      categoryId: 8,
      publicationInfo: {
        publisher: 'International Affairs Review',
        datePublished: '2024-11-22'
      }
    }
];
  