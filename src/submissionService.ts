import submissions from '../db/submissions.json'
import { Submission } from '../db/interfaces'

export function getSubmissionByInstitutionAndYear(id: string, year: number): Submission {
  return submissions
    .filter(sub => sub.institution_id === id)
    .filter(sub => sub.year === year)
    [0]
}