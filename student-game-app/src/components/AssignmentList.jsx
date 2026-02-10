import {
  isOverdue,
  getDaysOverdue,
  getAssignmentStatus,
} from "../logic/timeUtils";

function AssignmentList({ assignments, onSubmitAssignment }) {
  const pendingAssignments = assignments.filter((a) => !a.submitted);

  if (pendingAssignments.length === 0) {
    return <p>No pending assignments.</p>;
  }

  return (
    <div>
      <h2>Your Assignments</h2>

      {pendingAssignments.map((assignment) => {
        const overdue = isOverdue(assignment.dueDate, assignment.submitted);
        const daysLate = getDaysOverdue(
          assignment.dueDate,
          assignment.submitted
        );
        const status = getAssignmentStatus(
          assignment.dueDate,
          assignment.submitted
        );

        return (
          <div key={assignment.id} className="assignmentCard">
            <input
              type="checkbox"
              onChange={() => onSubmitAssignment(assignment.id)}
              checked={assignment.submitted}
              title="Mark as submitted"
            />
            <div className="assignmentCardContent">
              <strong>{assignment.title}</strong>
              <div>Course: {assignment.course}</div>
              <div>Due: {assignment.dueDate}</div>
              <div
                className={`assignmentCardStatus ${
                  overdue ? "overdue" : ""
                }`}
              >
                {status}
                {overdue &&
                  ` (${daysLate} day${daysLate !== 1 ? "s" : ""} overdue)`}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default AssignmentList;
