import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { servicesData } from "@/data/services";

export default function QuoteGenerator() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [guestCount, setGuestCount] = useState("");
  const [eventType, setEventType] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const handleServiceToggle = (serviceTitle: string) => {
    setSelectedServices(prev => 
      prev.includes(serviceTitle) 
        ? prev.filter(s => s !== serviceTitle)
        : [...prev, serviceTitle]
    );
  };

  const generatePDF = () => {
    const doc = new jsPDF();

    // Add Logo/Header
    doc.setFontSize(22);
    doc.setTextColor(219, 181, 36); // Gold color
    doc.text("Raj Catters", 105, 20, { align: "center" });
    
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text("Luxury Catering & Events", 105, 28, { align: "center" });
    doc.text("Bhopal | 7999859833 | 9229658667", 105, 34, { align: "center" });

    // Customer Details
    doc.setFontSize(14);
    doc.text("Quote For:", 20, 50);
    doc.setFontSize(12);
    doc.text(`Name: ${name}`, 20, 60);
    doc.text(`Email: ${email}`, 20, 66);
    doc.text(`Event Type: ${eventType}`, 20, 72);
    doc.text(`Guest Count: ${guestCount}`, 20, 78);

    // Services Table
    const tableData = selectedServices.map(s => {
        const service = servicesData.find(sd => sd.title === s);
        return [s, service?.packages[0].price || "Custom"]; // Default to first package price
    });

    autoTable(doc, {
      startY: 90,
      head: [['Service', 'Starting Price']],
      body: tableData,
      theme: 'grid',
      headStyles: { fillColor: [219, 181, 36] },
    });

    // Footer
    const finalY = (doc as any).lastAutoTable.finalY || 100;
    doc.text("Note: This is an estimated quote. Final pricing depends on customization.", 20, finalY + 20);
    doc.text("Contact us to finalize your booking.", 20, finalY + 28);

    doc.save("Raj_Catters_Quote.pdf");
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-black w-full md:w-auto">
          Get Instant Quote
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-black/95 border-primary/20 text-white max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif text-primary text-center">Get Your Estimated Quote</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Name</Label>
              <Input value={name} onChange={e => setName(e.target.value)} className="bg-secondary/20 border-white/10" placeholder="Your Name" />
            </div>
            <div className="space-y-2">
              <Label>Email</Label>
              <Input value={email} onChange={e => setEmail(e.target.value)} className="bg-secondary/20 border-white/10" placeholder="your@email.com" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Event Type</Label>
              <Select onValueChange={setEventType}>
                <SelectTrigger className="bg-secondary/20 border-white/10">
                  <SelectValue placeholder="Select Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Wedding">Wedding</SelectItem>
                  <SelectItem value="Corporate">Corporate</SelectItem>
                  <SelectItem value="Birthday">Birthday</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Guest Count</Label>
              <Input value={guestCount} onChange={e => setGuestCount(e.target.value)} className="bg-secondary/20 border-white/10" placeholder="e.g. 500" type="number" />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Select Services</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {servicesData.map((service) => (
                <div key={service.title} className="flex items-center space-x-2 bg-secondary/20 p-3 rounded border border-white/5">
                  <Checkbox 
                    id={service.title} 
                    checked={selectedServices.includes(service.title)}
                    onCheckedChange={() => handleServiceToggle(service.title)}
                    className="border-primary data-[state=checked]:bg-primary data-[state=checked]:text-black"
                  />
                  <label
                    htmlFor={service.title}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                  >
                    {service.title}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <Button onClick={generatePDF} className="w-full bg-primary text-black hover:bg-primary/90 mt-4">
            Download Quote PDF
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}