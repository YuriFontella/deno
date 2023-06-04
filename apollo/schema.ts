export const typeDefs = `
  type Dinosaur {
    name: String
  }

  type Query {
    dinosaurs: [Dinosaur]
  }
`
