import { useState } from "react";
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors, DragOverlay } from "@dnd-kit/core";
import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { menuData } from "@/data/menu";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { GripVertical, Plus, Trash2, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

// Helper to flatten menu items for selection
const allMenuItems = Object.values(menuData).flatMap(cat => cat.items);

function SortableItem({ id, item, onDelete }: { id: string, item: any, onDelete: (id: string) => void }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
  
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} className="flex items-center justify-between bg-white/5 p-3 rounded mb-2 border border-white/10 group">
      <div className="flex items-center gap-3">
        <div {...attributes} {...listeners} className="cursor-grab active:cursor-grabbing text-gray-500 hover:text-gold">
          <GripVertical size={18} />
        </div>
        <div>
          <p className="text-white font-medium text-sm">{item.name}</p>
          <p className="text-xs text-gold">₹{item.price}</p>
        </div>
      </div>
      <Button variant="ghost" size="icon" onClick={() => onDelete(id)} className="text-gray-500 hover:text-red-400 h-8 w-8">
        <Trash2 size={16} />
      </Button>
    </div>
  );
}

export default function MenuPlanner() {
  const [plannedItems, setPlannedItems] = useState<any[]>([]);
  const { toast } = useToast();
  
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      setPlannedItems((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  const addToPlan = (item: any) => {
    if (plannedItems.find(i => i.id === item.id)) {
      toast({ title: "Item already added", variant: "destructive" });
      return;
    }
    setPlannedItems([...plannedItems, item]);
    toast({ title: "Added to Planner", description: `${item.name} added.` });
  };

  const removeFromPlan = (id: string) => {
    setPlannedItems(items => items.filter(i => i.id !== id));
  };

  const totalCost = plannedItems.reduce((sum, item) => sum + item.price, 0);

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(20);
    doc.setTextColor(219, 181, 36);
    doc.text("Raj Catters - Custom Menu Plan", 105, 20, { align: "center" });
    
    const tableData = plannedItems.map(item => [item.name, `Rs. ${item.price}`]);
    tableData.push(["TOTAL EST. PER PLATE", `Rs. ${totalCost}`]);

    autoTable(doc, {
      startY: 40,
      head: [['Item', 'Price']],
      body: tableData,
      theme: 'grid',
      headStyles: { fillColor: [219, 181, 36] },
    });

    doc.save("My_Menu_Plan.pdf");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-[600px]">
      {/* Selection Area */}
      <Card className="glass-card bg-black/40 border-gold/20 flex flex-col overflow-hidden h-full">
        <CardHeader>
          <CardTitle className="text-gold font-serif">Select Items</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow overflow-hidden p-0">
          <ScrollArea className="h-full px-6 pb-6">
            {Object.entries(menuData).map(([key, category]) => (
              <div key={key} className="mb-6">
                <h3 className="text-white font-bold mb-3 sticky top-0 bg-black/90 py-2 z-10 border-b border-white/10">{category.label}</h3>
                <div className="space-y-2">
                  {category.items.map((item: any) => (
                    <div key={item.id} className="flex justify-between items-center bg-secondary/20 p-2 rounded hover:bg-secondary/40 transition-colors">
                      <span className="text-gray-300 text-sm">{item.name}</span>
                      <Button size="sm" variant="ghost" onClick={() => addToPlan(item)} className="h-6 w-6 p-0 text-gold hover:text-white">
                        <Plus size={16} />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </ScrollArea>
        </CardContent>
      </Card>

      {/* Planner Area */}
      <Card className="glass-card bg-black/60 border-gold/40 flex flex-col overflow-hidden h-full">
        <CardHeader className="flex flex-row justify-between items-center border-b border-gold/10 bg-gold/5">
          <CardTitle className="text-gold font-serif">Your Menu Plan</CardTitle>
          <div className="text-right">
            <p className="text-xs text-gray-400">Est. Per Plate</p>
            <p className="text-xl font-bold text-white">₹{totalCost}</p>
          </div>
        </CardHeader>
        <CardContent className="flex-grow overflow-hidden p-4 flex flex-col">
          {plannedItems.length === 0 ? (
             <div className="flex-grow flex items-center justify-center text-gray-500 italic">
               Drag items here or click + to add
             </div>
          ) : (
            <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
              <SortableContext items={plannedItems.map(i => i.id)} strategy={verticalListSortingStrategy}>
                <ScrollArea className="flex-grow">
                  {plannedItems.map((item) => (
                    <SortableItem key={item.id} id={item.id} item={item} onDelete={removeFromPlan} />
                  ))}
                </ScrollArea>
              </SortableContext>
            </DndContext>
          )}
          
          <div className="pt-4 mt-auto border-t border-white/10">
            <Button onClick={downloadPDF} className="w-full bg-gold text-black hover:bg-gold/80 font-bold" disabled={plannedItems.length === 0}>
              <Download className="mr-2" size={18} /> Download Menu PDF
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}