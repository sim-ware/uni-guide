import submissions from '../db/submissions.json'
import { Submission } from '../db/interfaces'

export function getAllAvailableSubmissionYearsPerInstitution(id: string): number[] {
  return submissions
    .filter(sub => sub.institution_id === id)
    .map(sub => sub.year)
}

export function getRatioByInstitutionAndYear(id: string, year: number): Submission {
  const submissionByIdAndYear = submissions
    .filter(sub => sub.institution_id === id)
    .filter(sub => sub.year === year)
    [0]
  
  const ratio = Math.round(
    submissionByIdAndYear.students_total / submissionByIdAndYear.staff_total
  )

  return {
    id: submissionByIdAndYear.id,
    ratio,
  }
}