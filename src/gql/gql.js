export const URL = "http://localhost:4000"

export const GET_CURRENCIES = `
  query{
    currencies{
      label
      symbol
    }
  }
`

export const GET_ALL_PRODUCTS = `
  query{
    categories{
      name
      products{
        id
        name      
        inStock
        gallery
        description
        category
        attributes{
          id
          name
          type
          items{
            displayValue
            value
            id
          }
        }
        prices{
          currency{
            label
            symbol
          }
          amount
        }
        brand
      }
    }
}
`

export const PRODUCT_BY_ID = `
    query($id: String!){
      product(id: $id){
        id
        name
        inStock
        gallery
        description
        category
        attributes{
          id
          name
          type
          items{
            id
            displayValue
            value
          }
        }
        prices{
          currency{
            label
            symbol
          }
          amount
        }
        brand
      }
    }
`

export const BY_CATEGORY = `
    query($title: String!){
      category(input: {title: $title}){
        products{
          id
          name
          inStock
          gallery
          description
          category
          attributes{
            id
            name
            type
            items{
              id
              displayValue
              value
            }
          }
          prices{
            currency{
              label
              symbol
            }
            amount
          }
          brand
        }
      }
    }
`

export const CATEGORIES = `
  query{
    categories{
      name
      products{
        id
        category
      }
    }
  }
`