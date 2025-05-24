"use client"

import { useState } from "react"
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const gradeData = {
  all: [
    { term: "1º Semestre", gpa: 9.71 },
    { term: "2º Semestre", gpa: 9.66 },
    { term: "3º Semestre", gpa: 9.52 },
    { term: "4º Semestre", gpa: 9.8 },
    { term: "5º Semestre", gpa: 9.61 },
  ],
  recent: [
    { term: "4º Semestre", gpa: 9.8 },
    { term: "5º Semestre", gpa: 9.61 },
  ],
}

export function ProgressChart() {
  const [timeRange, setTimeRange] = useState("all")

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle>Progresso da Média</CardTitle>
          <CardDescription>Desempenho acadêmico ao longo do tempo</CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Selecione o período" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todo o Curso</SelectItem>
            <SelectItem value="recent">Recente</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ChartContainer
            config={{
              gpa: {
                label: "Média",
                color: "hsl(var(--chart-1))",
              },
            }}
          >
            <ResponsiveContainer width="100%" height="100%">
            <AreaChart
  data={gradeData[timeRange as keyof typeof gradeData]}
  margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
>
  <defs>
    <linearGradient id="colorGpa" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#4CAF50" stopOpacity={0.8} /> {/* Verde */}
      <stop offset="95%" stopColor="#4CAF50" stopOpacity={0} /> {/* Verde */}
    </linearGradient>
  </defs>
  <XAxis dataKey="term" tick={{ fontSize: 12 }} tickLine={false} axisLine={false} />
  <YAxis
    domain={[0, 10]}
    tick={{ fontSize: 12 }}
    tickLine={false}
    axisLine={false}
    tickFormatter={(value) => `${value.toFixed(1)}`}
  />
  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
  <ChartTooltip content={<ChartTooltipContent />} />
  <Area
    type="monotone"
    dataKey="gpa"
    stroke="#4CAF50" // Verde
    fillOpacity={1}
    fill="url(#colorGpa)"
  />
</AreaChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>

        <div className="mt-4 flex justify-between items-center">
          <div className="text-center">
            <div className="text-sm font-medium text-muted-foreground">Média</div>
            <div className="text-2xl font-bold text-green-600">9.71</div>
          </div>
          <div className="text-center">
            <div className="text-sm font-medium text-muted-foreground">Média Geral</div>
            <div className="text-2xl font-bold text-green-600">9.66</div>
          </div>
          <div className="text-center">
            <div className="text-sm font-medium text-muted-foreground">Progresso Geral</div>
            <div className="text-2xl font-bold text-green-600">100%</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

