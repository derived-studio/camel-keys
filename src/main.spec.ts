import { toCamelKeys } from './main'

describe('to camel keys', () => {
  it('converts object keys into camel case format', () => {
    expect(
      toCamelKeys({
        best_chili: {
          chili_ingredients: ['beef', 'dried chilis', 'fresh tomatoes', 'cumin', 'onions', 'onion-powder', 'peppers'],
          chili_steps: {
            step_1: '',
            step_2: ''
          }
        },
        serves: 6,
        pairs_with: [
          {
            'french-bread': {}
          },
          {
            'rye-croutons': {}
          }
        ]
      })
    ).toEqual({
      bestChili: {
        chiliIngredients: ['beef', 'dried chilis', 'fresh tomatoes', 'cumin', 'onions', 'onion-powder', 'peppers'],
        chiliSteps: {
          step_1: '',
          step_2: ''
        }
      },
      serves: 6,
      pairsWith: [
        {
          frenchBread: {}
        },
        {
          ryeCroutons: {}
        }
      ]
    })
  })
})
