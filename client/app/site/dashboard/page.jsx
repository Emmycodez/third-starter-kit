import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { DollarSign, Plus, Users } from "lucide-react";

import LeadTable from "@/components/LeadTable";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const DashboardPage = async () => {
const {getAccessTokenRaw} = getKindeServerSession();
const accessToken = await getAccessTokenRaw();


const response = await fetch("http://localhost:5000/api/protected", {
  cache: 'no-store',
  headers: {
    Authorization: `Bearer ${accessToken}`
  }
});

  const data = await response.json();
  console.log(data);

  return (
    <Card className={` flex flex-col min-h-screen`}>
      <main className={` flex-1 p-6 lg:px-8`}>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Create New Funnel
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="last:text-sm font-medium">
                  Total Revenue
                </CardTitle>
                <DollarSign className="w-4 h-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">₦250,231.89</div>
                <p className="text-xs text-muted-foreground">
                  +20.1% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-sm font-medium">
                  Conversions
                </CardTitle>
                <Users className="w-4 h-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2,560</div>
                <p className="text-sm text-muted-foreground">
                  +15.3% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-sm font-medium">
                  Active Funnels
                </CardTitle>
                <Users className="w-4 h-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-sm text-muted-foreground">
                  +2 new this month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-sm font-medium">
                  Avg. Conversion Rate
                </CardTitle>
                <Users className="w-4 h-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3.24%</div>
                <p className="text-sm text-muted-foreground">
                  +0.4% from last month
                </p>
              </CardContent>
            </Card>
          </div>

          <LeadTable title="Recent Leads" limit={6} />
        </div>
      </main>
    </Card>
  );
};

export default DashboardPage;
