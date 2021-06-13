# uni-guide
A simple TS | node.js | React app for displaying university data.
The aim was to be able to supply a 'University Name' and 'Year' through a simple React FrontEnd, and be able to see the Student to Staff Ratio as a Pie Chart in the FrontEnd.

I started with the BackEnd, scaffolding it with Jest and TypeScript. As we had 2 data sources, `institutions` & `submissions`, it felt intuitive to me to create a separate service to read from each one. The aim here was to create a set of queries:
* one that would let me fetch all available University Name, Id, and Submission Year Ranges. This would be to populate a dropdown in the FrontEnd where a User can select a University Name, and then select a Year from an ensuing dropdown populated by that University's Year Range
* another query that would let me select a submission by University Name and Year, and return the Student to Staff Ratio

Once these were built, I got as far as delineating the space I would need in the FrontEnd to contain dropdowns and the chart area, before hitting errors when it came to reading from my `back-end` repo, as it was outside of the React App's `src` folder. 

At this point I was a bit short on time, so instead of inserting the `back-end` logic into an `express` server or similar way of locally deploying it, I thought to complete the logic instead by calculating the Student to Staff Ratio in the `back-end` and returning that instead of the submission in the second bullet point query above.

Unsure of how best to calculate this, Google pointed me towards a PDF containing the following (https://www.oecd-ilibrary.org/docserver/a1ef3bfe-en.pdf?expires=1623523184&id=id&accname=guest&checksum=08D420F9DA186A31BBCDC7C7612F24AE):
`The student-teacher ratio is calculated by dividing the number of full-time equivalent students by the number of full-time equivalent teachers at a given level of education and type of institution.`

I then tied the two functions `getAllIdNameAndYearRanges` & `getRatioByInstitutionAndYear` into endpoints in a simple express server, for the React FrontEnd to be able to call. With this Data I would then try to developed the dropdown menus quickly using Material UI, and added a simple Pie Chart using ReCharts: https://github.com/recharts/recharts.

## To Run
The following commands are useful to run/test parts of the stack in isolation. To run it altogether, in separate terminal windows, run the below commands to 'Run BackEnd' and 'Run FrontEnd', being sure that in the separate terminal windows used to run each process, you have changed into the correct `front-end` or `back-end` directory.

### To Test BackEnd
`cd back-end`
`npm test`

### To Run BackEnd
`cd back-end`
`npm start`

### To Run FrontEnd
`cd front-end`
`npm start`
