import { getAllInstitutionIdAndNames } from "../src/institutionService"

describe("test add function", () => {
  it("should return an Array of Ids of all Institutions", () => {
    expect(getAllInstitutionIdAndNames()).toStrictEqual(
      [
        { id: "EA8BBED7-4106-94AF-48DD-A1414E386AFB", name: "Prestigious Science University"},
        { id: "DEA4606B-4A21-D497-40E9-A5FB7589B536", name: "Top University of Mathematics" },
        { id: "8C8A804F-7A43-5840-4296-8A0117325921", name: "Technology Institute" },
      ]
    )
  })
})