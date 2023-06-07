import { hasRole } from './rules.ts'

const resolversComposition = {
  'Query.dinosaurs': [hasRole('admin')]
}

export default resolversComposition