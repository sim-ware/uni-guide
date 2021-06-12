import institutions from '../db/institutions.json'
import { InstitutionIdAndNameList } from '../db/interfaces'
import { getAllAvailableSubmissionYearsPerInstitution } from './submissionService'

export function getAllIdNameAndYearRanges(): InstitutionIdAndNameList[] {
  return institutions.map(i => {
    const yearRange = getAllAvailableSubmissionYearsPerInstitution(i.id)
    
    return { id: i.id, name: i.name, yearRange }
  })
}