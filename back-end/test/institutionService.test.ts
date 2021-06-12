import { getAllInstitutionIds } from "../src/institutionService"

describe("test add function", () => {
  it("should return an Array of Ids of all Institutions", () => {
    expect(getAllInstitutionIds()).toStrictEqual(
      [
        "EA8BBED7-4106-94AF-48DD-A1414E386AFB",
        "DEA4606B-4A21-D497-40E9-A5FB7589B536",
        "8C8A804F-7A43-5840-4296-8A0117325921",
      ]
    )
  })
})