import '../../App.css';
import { PieChart, Pie } from "recharts";


function ChartArea(props: any) {
  return (
    <div>
      <p>{props.chartInfo.ratio}</p>
      <PieChart width={400} height={400}>
        <Pie
          dataKey="value"
          startAngle={180}
          endAngle={0}
          data={[
            { name: 'Total Staff', value: props.chartInfo.staffTotal }, 
            { name: 'Total Students', value: props.chartInfo.studentsTotal }
          ]}
          cx={200}
          cy={200}
          outerRadius={80}
          fill="#8884d8"
          label
        />
      </PieChart>
    </div>
  );
}

export default ChartArea;
