"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"

const students = [
  {
    id: "1",
    name: "Alex Johnson",
    averageGrade: 88,
    completedAssignments: 12,
    totalAssignments: 15,
  },
  {
    id: "2",
    name: "Jamie Smith",
    averageGrade: 92,
    completedAssignments: 14,
    totalAssignments: 15,
  },
  {
    id: "3",
    name: "Taylor Brown",
    averageGrade: 78,
    completedAssignments: 10,
    totalAssignments: 15,
  },
  {
    id: "4",
    name: "Morgan Wilson",
    averageGrade: 95,
    completedAssignments: 15,
    totalAssignments: 15,
  },
  {
    id: "5",
    name: "Casey Davis",
    averageGrade: 82,
    completedAssignments: 11,
    totalAssignments: 15,
  },
]

export function StudentProgress() {
  const [selectedStudent, setSelectedStudent] = useState(students[0].id)

  const student = students.find((s) => s.id === selectedStudent) || students[0]
  const completionPercentage = Math.round((student.completedAssignments / student.totalAssignments) * 100)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Student Progress</CardTitle>
        <CardDescription>Track individual student performance</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <Select value={selectedStudent} onValueChange={setSelectedStudent}>
            <SelectTrigger>
              <SelectValue placeholder="Select a student" />
            </SelectTrigger>
            <SelectContent>
              {students.map((student) => (
                <SelectItem key={student.id} value={student.id}>
                  {student.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-6">
          <div>
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-sm font-medium">Average Grade</h4>
              <span
                className={`text-sm font-medium ${
                  student.averageGrade >= 90
                    ? "text-green-600"
                    : student.averageGrade >= 80
                      ? "text-blue-600"
                      : student.averageGrade >= 70
                        ? "text-amber-600"
                        : "text-red-600"
                }`}
              >
                {student.averageGrade}%
              </span>
            </div>
            <Progress
              value={student.averageGrade}
              className={`h-2 ${
                student.averageGrade >= 90
                  ? "bg-green-100"
                  : student.averageGrade >= 80
                    ? "bg-blue-100"
                    : student.averageGrade >= 70
                      ? "bg-amber-100"
                      : "bg-red-100"
              }`}
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-sm font-medium">Assignment Completion</h4>
              <span className="text-sm font-medium">
                {student.completedAssignments}/{student.totalAssignments}
              </span>
            </div>
            <Progress value={completionPercentage} className="h-2" />
          </div>

          <div className="pt-4 border-t">
            <h4 className="text-sm font-medium mb-2">Performance Summary</h4>
            <p className="text-sm text-muted-foreground">
              {student.name} has completed {student.completedAssignments} out of {student.totalAssignments} assignments
              with an average grade of {student.averageGrade}%.
              {student.averageGrade >= 90
                ? " Outstanding performance!"
                : student.averageGrade >= 80
                  ? " Good progress overall."
                  : student.averageGrade >= 70
                    ? " Showing steady improvement."
                    : " Needs additional support."}
            </p>
          </div>

          <Button variant="outline" size="sm" className="w-full">
            View Detailed Report
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

