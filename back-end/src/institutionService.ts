import institutions from '../db/institutions.json'
import { InstitutionIdAndNameList } from '../db/interfaces'

export function getAllInstitutionIds(): InstitutionIdAndNameList[] {
  return institutions.map(i => {
    return { id: i.id, name: i.name }
  })
}