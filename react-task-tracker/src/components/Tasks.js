const tasks = [
  {
    id: 1,
    text: "Doctor Appointment",
    day: "Feb 5th at 2:30 pm",
    reminder: true,
  },
  {
    id: 2,
    text: "Meeting at school",
    day: "Feb 6th at 10:30 pm",
    reminder: true,
  },
  {
    id: 3,
    text: "Food shopping",
    day: "Feb 5th at 6:30 am",
    reminder: false,
  },
];

const Tasks = () => {
  return (
    <>
      {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </>
  );
};

export default Tasks;
