import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, Eye, Package, Upload, Mail, Database, CheckCircle, Users, BarChart3, Shield, Zap, Globe } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24">
          <div className="text-center">
            <div className="flex justify-center mb-6 sm:mb-8">
              <div className="p-3 sm:p-4 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full shadow-lg">
                <Package className="h-12 w-12 sm:h-16 sm:w-16 text-primary" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
              Smart Inventory
              <span className="block text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Management System
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl lg:max-w-3xl mx-auto px-4 leading-relaxed">
              Transform your clothing business with our comprehensive inventory management solution. Streamline operations, 
              track stock levels, manage customer enquiries, and grow your business with powerful analytics and automated workflows.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-md sm:max-w-none mx-auto">
              <Button asChild size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-3 w-full sm:w-auto shadow-lg hover:shadow-xl transition-all duration-300">
                <Link href="/add-items">
                  <Plus className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Add New Item
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-3 w-full sm:w-auto border-2 hover:bg-muted/50 transition-all duration-300">
                <Link href="/view-items">
                  <Eye className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  View Inventory
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 sm:mb-20">
          <div className="text-center p-6 bg-card rounded-lg shadow-sm border">
            <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Cloud-Based</div>
          </div>
          <div className="text-center p-6 bg-card rounded-lg shadow-sm border">
            <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Access</div>
          </div>
          <div className="text-center p-6 bg-card rounded-lg shadow-sm border">
            <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">∞</div>
            <div className="text-sm text-muted-foreground">Items</div>
          </div>
          <div className="text-center p-6 bg-card rounded-lg shadow-sm border">
            <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">0ms</div>
            <div className="text-sm text-muted-foreground">Setup Time</div>
          </div>
        </div>

        {/* Main Features Section */}
        <div className="mb-16 sm:mb-20">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Everything You Need to Manage Your Inventory</h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-4">
              Our comprehensive solution provides all the tools you need to efficiently manage your clothing business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="text-center hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
              <CardHeader className="pb-4">
                <div className="mx-auto p-3 bg-gradient-to-r from-blue-100 to-blue-50 rounded-full w-fit mb-4 shadow-sm">
                  <Plus className="h-7 w-7 sm:h-8 sm:w-8 text-blue-600" />
                </div>
                <CardTitle className="text-lg sm:text-xl">Effortless Item Management</CardTitle>
                <CardDescription className="text-sm sm:text-base px-2">
                  Add and organize your inventory with our intuitive interface designed for speed and accuracy
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center justify-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Quick item entry with smart forms</span>
                  </div>
                  <div className="flex items-center justify-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Multiple image upload support</span>
                  </div>
                  <div className="flex items-center justify-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Detailed product descriptions</span>
                  </div>
                  <div className="flex items-center justify-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Real-time form validation</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
              <CardHeader className="pb-4">
                <div className="mx-auto p-3 bg-gradient-to-r from-green-100 to-green-50 rounded-full w-fit mb-4 shadow-sm">
                  <Eye className="h-7 w-7 sm:h-8 sm:w-8 text-green-600" />
                </div>
                <CardTitle className="text-lg sm:text-xl">Visual Inventory Display</CardTitle>
                <CardDescription className="text-sm sm:text-base px-2">
                  Browse and manage your collection with stunning visual layouts and interactive galleries
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center justify-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Responsive grid layouts</span>
                  </div>
                  <div className="flex items-center justify-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Interactive image carousels</span>
                  </div>
                  <div className="flex items-center justify-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Full-screen detail modals</span>
                  </div>
                  <div className="flex items-center justify-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Mobile-optimized viewing</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20 md:col-span-2 lg:col-span-1">
              <CardHeader className="pb-4">
                <div className="mx-auto p-3 bg-gradient-to-r from-purple-100 to-purple-50 rounded-full w-fit mb-4 shadow-sm">
                  <Mail className="h-7 w-7 sm:h-8 sm:w-8 text-purple-600" />
                </div>
                <CardTitle className="text-lg sm:text-xl">Smart Email System</CardTitle>
                <CardDescription className="text-sm sm:text-base px-2">
                  Automated enquiry management with professional email templates and instant notifications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center justify-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>One-click customer enquiries</span>
                  </div>
                  <div className="flex items-center justify-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Automated email responses</span>
                  </div>
                  <div className="flex items-center justify-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Professional email templates</span>
                  </div>
                  <div className="flex items-center justify-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Complete item details included</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Technical Infrastructure */}
        <div className="bg-gradient-to-r from-muted/30 to-muted/10 rounded-2xl p-6 sm:p-8 lg:p-12 mb-16 sm:mb-20 border shadow-sm">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Built on Modern Technology</h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              Enterprise-grade infrastructure ensuring reliability, security, and scalability for your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-3 sm:space-y-0 sm:space-x-4 text-center sm:text-left">
              <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                <Database className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-base sm:text-lg mb-1">PostgreSQL Database</h3>
                <p className="text-sm text-muted-foreground">Rock-solid data storage with Supabase backend ensuring 99.9% uptime</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-3 sm:space-y-0 sm:space-x-4 text-center sm:text-left">
              <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                <Upload className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-base sm:text-lg mb-1">Cloud Storage</h3>
                <p className="text-sm text-muted-foreground">Lightning-fast image hosting with global CDN delivery and automatic optimization</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-3 sm:space-y-0 sm:space-x-4 text-center sm:text-left sm:col-span-2 lg:col-span-1">
              <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-base sm:text-lg mb-1">Email Integration</h3>
                <p className="text-sm text-muted-foreground">Professional automated notifications powered by Resend with 99.9% delivery rate</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-12">
            <div className="text-center p-4 bg-card/50 rounded-lg border">
              <Shield className="h-6 w-6 mx-auto mb-2 text-primary" />
              <div className="text-sm font-medium">Secure</div>
            </div>
            <div className="text-center p-4 bg-card/50 rounded-lg border">
              <Globe className="h-6 w-6 mx-auto mb-2 text-primary" />
              <div className="text-sm font-medium">Global CDN</div>
            </div>
            <div className="text-center p-4 bg-card/50 rounded-lg border">
              <BarChart3 className="h-6 w-6 mx-auto mb-2 text-primary" />
              <div className="text-sm font-medium">Scalable</div>
            </div>
            <div className="text-center p-4 bg-card/50 rounded-lg border">
              <Users className="h-6 w-6 mx-auto mb-2 text-primary" />
              <div className="text-sm font-medium">Multi-User</div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16 sm:mb-20">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Why Choose Our Solution?</h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-3xl mx-auto px-4">
              Join thousands of businesses that have streamlined their operations and increased efficiency with our platform
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-green-100 rounded-lg flex-shrink-0 mt-1">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Increase Productivity by 300%</h3>
                  <p className="text-muted-foreground">Automate repetitive tasks and focus on growing your business instead of managing spreadsheets</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-blue-100 rounded-lg flex-shrink-0 mt-1">
                  <Shield className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Enterprise-Grade Security</h3>
                  <p className="text-muted-foreground">Your data is protected with bank-level encryption and regular security audits</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-purple-100 rounded-lg flex-shrink-0 mt-1">
                  <Zap className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Lightning Fast Performance</h3>
                  <p className="text-muted-foreground">Built with modern technology stack for instant loading and seamless user experience</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-orange-100 rounded-lg flex-shrink-0 mt-1">
                  <Globe className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Access Anywhere, Anytime</h3>
                  <p className="text-muted-foreground">Cloud-based solution that works perfectly on desktop, tablet, and mobile devices</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-teal-100 rounded-lg flex-shrink-0 mt-1">
                  <Users className="h-5 w-5 text-teal-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Team Collaboration</h3>
                  <p className="text-muted-foreground">Multiple users can work simultaneously with role-based access control</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-pink-100 rounded-lg flex-shrink-0 mt-1">
                  <BarChart3 className="h-5 w-5 text-pink-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Powerful Analytics</h3>
                  <p className="text-muted-foreground">Get insights into your inventory trends and customer behavior with detailed reports</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground py-16 sm:py-20 lg:py-24 -mx-4 sm:-mx-6 lg:-mx-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">Ready to Get Started?</h2>
            <p className="text-primary-foreground/90 text-base sm:text-lg mb-8 sm:mb-10 max-w-2xl mx-auto">
              Begin managing your inventory efficiently today. No setup fees, no hidden costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0 mb-8">
              <Button asChild size="lg" variant="secondary" className="text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-2.5 sm:py-3 w-full sm:w-auto min-w-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <Link href="/add-items" className="flex items-center justify-center">
                  <Plus className="mr-1.5 sm:mr-2 h-4 w-4 flex-shrink-0" />
                  <span className="truncate">Start Adding Items</span>
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-2.5 sm:py-3 w-full sm:w-auto min-w-0 border-2 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 transition-all duration-300">
                <Link href="/view-items" className="flex items-center justify-center">
                  <Eye className="mr-1.5 sm:mr-2 h-4 w-4 flex-shrink-0" />
                  <span className="truncate">View Inventory</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-muted/30 border-t mt-16 sm:mt-20 -mx-4 sm:-mx-6 lg:-mx-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
              {/* Company Info */}
              <div className="lg:col-span-2">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Package className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Inventory Pro</h3>
                </div>
                <p className="text-muted-foreground mb-6 max-w-md">
                  Streamline your clothing business with our comprehensive inventory management solution. 
                  Built for modern businesses that need reliability and efficiency.
                </p>
                <div className="flex space-x-4">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Free to start</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>24/7 support</span>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-semibold mb-4">Quick Actions</h4>
                <div className="space-y-3">
                  <Link href="/add-items" className="block text-muted-foreground hover:text-foreground transition-colors">
                    Add New Items
                  </Link>
                  <Link href="/view-items" className="block text-muted-foreground hover:text-foreground transition-colors">
                    View Inventory
                  </Link>
                  <Link href="/dashboard" className="block text-muted-foreground hover:text-foreground transition-colors">
                    Dashboard
                  </Link>
                  <Link href="/reports" className="block text-muted-foreground hover:text-foreground transition-colors">
                    Reports
                  </Link>
                </div>
              </div>

              {/* Features */}
              <div>
                <h4 className="font-semibold mb-4">Features</h4>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Database className="h-4 w-4" />
                    <span>Cloud Storage</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4" />
                    <span>Email Integration</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="h-4 w-4" />
                    <span>Secure & Reliable</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Globe className="h-4 w-4" />
                    <span>Global Access</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-muted-foreground/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <div className="text-sm text-muted-foreground">
                © 2025 Inventory Pro. Built with ❤️ for modern businesses.
              </div>
              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <span>Powered by Next.js</span>
                <span>•</span>
                <span>Hosted on Vercel</span>
                <span>•</span>
                <span>Data by Supabase</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}