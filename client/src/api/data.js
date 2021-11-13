const students = [
  {
    name: 'ola',
    id: 1,
    isSelected: false,
    games: ['swim', 'jump', 'football']
  },
  {
    name: 'shola',
    id: 2,
    isSelected: false,
    games: ['run']
  },
  {
    name: 'bunmi',
    id: 3,
    isSelected: false,
    games: ['jump', 'football']
  },
  {
    name: 'ade',
    id: 4,
    isSelected: false,
    games: ['swim', 'run', 'football']
  },
]


export default {
  getStudents() {
    return students
  }
}