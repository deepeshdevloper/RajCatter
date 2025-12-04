import { motion } from "framer-motion";
import { Calendar, Users, Clock, FileText, Settings, LogOut } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import MenuPlanner from "@/components/features/MenuPlanner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function PortalDashboard() {
  return (
    <div className="pt-24 min-h-screen bg-black p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-serif font-bold text-white">Welcome, Rahul</h1>
            <p className="text-gray-400">Wedding Event • Dec 12, 2024</p>
          </div>
          <Button variant="outline" className="border-red-900 text-red-500 hover:bg-red-900/20" onClick={() => window.location.href = "/portal"}>
            <LogOut className="mr-2" size={18} /> Logout
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="glass-card border-gold/20">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">Timeline Progress</CardTitle>
              <Clock className="h-4 w-4 text-gold" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">65%</div>
              <Progress value={65} className="mt-2 h-2 bg-gray-800" indicatorClassName="bg-gold" />
              <p className="text-xs text-gray-500 mt-2">Next: Final Menu Lock (3 Days)</p>
            </CardContent>
          </Card>
          <Card className="glass-card border-gold/20">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">Guest Count</CardTitle>
              <Users className="h-4 w-4 text-gold" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">450 / 500</div>
              <p className="text-xs text-gray-500 mt-2">RSVP Confirmed</p>
            </CardContent>
          </Card>
          <Card className="glass-card border-gold/20">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">Payment Status</CardTitle>
              <FileText className="h-4 w-4 text-gold" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-400">Paid</div>
              <p className="text-xs text-gray-500 mt-2">Advance 50% Cleared</p>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="planner" className="space-y-6">
          <TabsList className="bg-white/5 border border-white/10 p-1">
            <TabsTrigger value="planner">Menu Planner</TabsTrigger>
            <TabsTrigger value="timeline">Timeline</TabsTrigger>
            <TabsTrigger value="docs">Documents</TabsTrigger>
          </TabsList>

          <TabsContent value="planner">
            <div className="bg-black/50 p-6 rounded-xl border border-white/10">
              <h2 className="text-xl font-bold text-white mb-4">Interactive Menu Planner</h2>
              <MenuPlanner />
            </div>
          </TabsContent>
          
          <TabsContent value="timeline">
            <Card className="glass-card border-white/10 p-6">
              <div className="space-y-8">
                {[
                  { date: "Oct 1", title: "Booking Confirmed", status: "done" },
                  { date: "Oct 15", title: "Initial Menu Selection", status: "done" },
                  { date: "Nov 1", title: "Tasting Session", status: "current" },
                  { date: "Nov 20", title: "Final Guest Count", status: "pending" },
                  { date: "Dec 12", title: "The Big Day", status: "pending" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className={`w-3 h-3 rounded-full ${item.status === 'done' ? 'bg-green-500' : item.status === 'current' ? 'bg-gold animate-pulse' : 'bg-gray-700'}`} />
                      {i !== 4 && <div className="w-0.5 h-full bg-gray-800 mt-2" />}
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">{item.date}</p>
                      <p className={`font-medium ${item.status === 'pending' ? 'text-gray-400' : 'text-white'}`}>{item.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="docs">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
               {['Invoice #1023', 'Contract Agreement', 'Venue Layout'].map((doc, i) => (
                 <Card key={i} className="glass-card border-white/10 p-6 hover:bg-white/5 cursor-pointer group">
                   <FileText className="h-8 w-8 text-gold mb-4 group-hover:scale-110 transition-transform" />
                   <h3 className="font-bold text-white">{doc}</h3>
                   <p className="text-sm text-gray-500 mt-1">PDF • 2.4 MB</p>
                 </Card>
               ))}
             </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}