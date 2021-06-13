import { 
  getRatioByInstitutionAndYear,
  getAllAvailableSubmissionYearsPerInstitution
} from "../src/services/submissionService"


describe("test getRatioByInstitutionAndYear()", () => {
  it("should return Ratio of Students to Staff of Submission matching the input Institution ID and Year", () => {
    expect(getRatioByInstitutionAndYear("EA8BBED7-4106-94AF-48DD-A1414E386AFB", 2017))
      .toStrictEqual({
        "id": "8F4B12A9-4D4C-C7FB-F9EC-EBDF75AB3933",
        "ratio": 78,
      })

    expect(getRatioByInstitutionAndYear("DEA4606B-4A21-D497-40E9-A5FB7589B536", 2018))
      .toStrictEqual({
        "id": "3A5EBCAC-3455-F4E5-C978-4A1CC1AA1D80",
        "ratio": 50,
      })
      
    expect(getRatioByInstitutionAndYear("8C8A804F-7A43-5840-4296-8A0117325921", 2018))
      .toStrictEqual({
        "id": "FBE010A3-84AE-911C-D6E1-BBC360908E25",
        "ratio": 81,
      })
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