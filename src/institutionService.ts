import institutions from '../db/institutions.json'

export function getAllInstitutionIds(): string[] {
  return institutions.map(i => i.id)
}