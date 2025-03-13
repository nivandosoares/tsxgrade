"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowUpDown, Download, MoreHorizontal, PenLine, Search, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const grades = [
  {
    id: "1",
    student: "Alex Johnson",
    assignment: "Midterm Exam",
    grade: 92,
    status: "Graded",
    date: "2023-10-15",
    project: "Physics Project",
  },
  {
    id: "2",
    student: "Jamie Smith",
    assignment: "Final Project",
    grade: 88,
    status: "Graded",
    date: "2023-10-20",
    project: "Chemistry Lab",
  },
  {
    id: "3",
    student: "Taylor Brown",
    assignment: "Quiz 3",
    grade: 75,
    status: "Needs Review",
    date: "2023-10-22",
    project: null,
  },
  {
    id: "4",
    student: "Morgan Wilson",
    assignment: "Essay",
    grade: 95,
    status: "Graded",
    date: "2023-10-18",
    project: "Literature Analysis",
  },
  {
    id: "5",
    student: "Casey Davis",
    assignment: "Group Presentation",
    grade: 85,
    status: "Graded",
    date: "2023-10-25",
    project: "History Timeline",
  },
]

export function GradesOverview() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredGrades = grades.filter(
    (grade) =>
      grade.student.toLowerCase().includes(searchTerm.toLowerCase()) ||
      grade.assignment.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Grades Overview</CardTitle>
          <CardDescription>Manage and track student grades</CardDescription>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4 mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search by student or assignment..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>
                  <Button variant="ghost" className="p-0 hover:bg-transparent">
                    <span>Student</span>
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                  </Button>
                </TableHead>
                <TableHead>Assignment</TableHead>
                <TableHead>Grade</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Project</TableHead>
                <TableHead className="w-[80px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredGrades.map((grade) => (
                <TableRow key={grade.id}>
                  <TableCell className="font-medium">{grade.student}</TableCell>
                  <TableCell>{grade.assignment}</TableCell>
                  <TableCell>
                    <span
                      className={`font-medium ${grade.grade >= 90 ? "text-green-600" : grade.grade >= 80 ? "text-blue-600" : grade.grade >= 70 ? "text-amber-600" : "text-red-600"}`}
                    >
                      {grade.grade}%
                    </span>
                  </TableCell>
                  <TableCell>
                    <Badge variant={grade.status === "Graded" ? "default" : "outline"}>{grade.status}</Badge>
                  </TableCell>
                  <TableCell>{new Date(grade.date).toLocaleDateString()}</TableCell>
                  <TableCell>
                    {grade.project ? (
                      <Link href={`/projects/${grade.id}`} className="text-blue-600 hover:underline">
                        {grade.project}
                      </Link>
                    ) : (
                      <span className="text-muted-foreground">No project</span>
                    )}
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Open menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <PenLine className="mr-2 h-4 w-4" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Trash2 className="mr-2 h-4 w-4" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}

