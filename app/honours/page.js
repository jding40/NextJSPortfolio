import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Grades from "@/data/grades.json";
import Slides from "@/components/Slides.js";

function GradesAndHonoursPage() {
  return (
    <Container className="honour_page">
      <Slides className="mx-5" />
      <Table striped>
        <thead>
          <tr className="bg-primary text-white">
            <th>Semester</th>
            <th>Course Code</th>
            <th>Course Name</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {Grades.map((ele) => (
            <tr
              key={ele.ID}
              className={ele.keyCourse === true ? "fw-bold text-primary" : ""}
            >
              <td className={ele.keyCourse === true ? " text-primary" : ""}>
                {ele.semester}
              </td>
              <td className={ele.keyCourse === true ? " text-primary" : ""}>
                {ele.courseCode}
              </td>
              <td className={ele.keyCourse === true ? " text-primary" : ""}>
                {ele.courseName}
              </td>
              <td className={ele.keyCourse === true ? " text-primary" : ""}>
                {ele.grade}
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th> GPA</th>
            <th> </th>
            <th> </th>
            <th> 3.93</th>
          </tr>
        </tfoot>
      </Table>
    </Container>
  );
}

export default GradesAndHonoursPage;
