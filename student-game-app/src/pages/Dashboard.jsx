import { useState } from "react";
import "./Dashboard.css";
import AssignmentForm from "../components/AssignmentForm";
import AssignmentList from "../components/AssignmentList";
import coinIcon from "../assets/coin.png";

function formatNumber(n) {
  return n.toLocaleString("en-US");
}

function Dashboard({
  coins,
  assignments,
  onAddAssignment,
  onSubmitAssignment,
}) {
  return (
    <div className="dashboardContentOnly">
      <div className="dashboardHeader">
        <h1 className="dashboardTitle">Assignments</h1>

        <div className="coinBox">
          <img className="coinIcon" src={coinIcon} alt="Coin icon" />
          <div className="coinText">{formatNumber(coins)}</div>
        </div>
      </div>

      <section className="dashboardPanel">
        <div className="panelScroll">
          {/* Section 1: Assignment Form */}
          <div className="formSection">
            <AssignmentForm onAddAssignment={onAddAssignment} />
          </div>

          {/* Section 2: Assignment List */}
          <div className="listSection">
            <AssignmentList
              assignments={assignments}
              onSubmitAssignment={onSubmitAssignment}
            />
          </div>

          {/* Section 3: Submitted Assignments */}
          <div className="submittedSection">
            <h3>Completed Assignments</h3>
            {assignments.filter((a) => a.submitted).length === 0 ? (
              <p>No completed assignments yet.</p>
            ) : (
              <div className="submittedList">
                {assignments
                  .filter((a) => a.submitted)
                  .map((assignment) => (
                    <div key={assignment.id} className="submittedCard">
                      <strong>{assignment.title}</strong>
                      <div>Course: {assignment.course}</div>
                      <div>Coins Earned: {assignment.coinsAwarded}</div>
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;