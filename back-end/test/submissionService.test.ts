import { 
  getSubmissionByInstitutionAndYear,
  getAllAvailableSubmissionYearsPerInstitution
} from "../src/submissionService"
import submissions from '../db/submissions.json'

describe("test getSubmissionByInstitutionAndYear()", () => {
  it("should return Submission matching input Institution ID and Year", () => {
    expect(getSubmissionByInstitutionAndYear("EA8BBED7-4106-94AF-48DD-A1414E386AFB", 2017))
      .toStrictEqual(submissions[0])

    expect(getSubmissionByInstitutionAndYear("DEA4606B-4A21-D497-40E9-A5FB7589B536", 2018))
      .toStrictEqual(submissions[3])
      
    expect(getSubmissionByInstitutionAndYear("8C8A804F-7A43-5840-4296-8A0117325921", 2018))
      .toStrictEqual(submissions[6])
  })
})

describe("test getAllAvailableSubmissionYearsPerInstitution()", () => {
  it("should return the range of available Years for input Institution ID", () => {
    expect(getAllAvailableSubmissionYearsPerInstitution("EA8BBED7-4106-94AF-48DD-A1414E386AFB"))
      .toStrictEqual([2017, 2019])
    
    expect(getAllAvailableSubmissionYearsPerInstitution("DEA4606B-4A21-D497-40E9-A5FB7589B536"))
      .toStrictEqual([2017, 2018, 2019])
      
    expect(getAllAvailableSubmissionYearsPerInstitution("8C8A804F-7A43-5840-4296-8A0117325921"))
      .toStrictEqual([2017, 2018])
  })
})