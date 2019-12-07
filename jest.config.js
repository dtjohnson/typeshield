module.exports = {
    preset: 'ts-jest', // Use ts-jest to compile TS code
    collectCoverage: true,
    collectCoverageFrom: ['src/**/!(*.d).ts'],
};
