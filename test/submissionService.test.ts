import { getSubmissionByInstitutionAndYear } from "../src/submissionService"
import submissions from '../db/submissions.json'

describe("test add function", () => {
  it("should return Submission matching input Institution ID and Year", () => {
    expect(getSubmissionByInstitutionAndYear("EA8BBED7-4106-94AF-48DD-A1414E386AFB", 2017))
      .toStrictEqual(submissions[0])

    expect(getSubmissionByInstitutionAndYear("DEA4606B-4A21-D497-40E9-A5FB7589B536", 2018))
      .toStrictEqual(submissions[3])
      
    expect(getSubmissionByInstitutionAndYear("8C8A804F-7A43-5840-4296-8A0117325921", 2018))
      .toStrictEqual(submissions[6])
  })
})