const swaggerDocument = {
  openapi: '3.0.0',
  info: {
    title: 'Invoice Rules API',
    version: '1.0.0',
    description: 'REST API for managing invoice rules'
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Local development server'
    }
  ],
  paths: {
    '/api/rules': {
      get: {
        summary: 'Get all rules',
        responses: {
          '200': {
            description: 'List of rules',
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: { $ref: '#/components/schemas/Rule' }
                }
              }
            }
          }
        }
      },
      post: {
        summary: 'Create a new rule',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/Rule' }
            }
          }
        },
        responses: {
          '201': { description: 'Rule created' },
          '400': { description: 'Validation error' }
        }
      }
    }
  },
  components: {
    schemas: {
      Rule: {
        type: 'object',
        required: ['id', 'name', 'condition', 'action'],
        properties: {
          id: { type: 'string', format: 'uuid' },
          name: { type: 'string', example: 'Late Fee Rule' },
          condition: { type: 'string', example: 'invoice.daysOverdue > 30' },
          action: { type: 'string', example: 'invoice.applyFee(50)' }
        }
      }
    }
  }
};

module.exports = swaggerDocument;