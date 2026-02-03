// lighthouserc.js
module.exports = {
  ci: {
    collect: {
      // Specifies how to run the site (e.g., start a server or point to static files)
      staticDistDir: './public', 
      // or startServerCommand: 'npm run start',
      // or url: ['https://www.example.com'],
    },
    upload: {
      // Specifies where to store the reports (e.g., temporary storage, custom server)
      target: 'temporary-public-storage',
    },
    assert: {
      // Specifies performance budgets/thresholds
      assertions: {
        "categories:performance": ["error", { "minScore": 0.9 }],
        "categories:accessibility": ["error", { "minScore": 0.9 }]
      }
    }
  },
};
