import { useState } from 'react';
import { Mail, MessageCircle, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      value: 'numanmunir000@gmail.com',
      link: 'mailto:numanmunir000@gmail.com',
      action: 'Write Me'
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: 'WhatsApp',
      value: '(+971) 52 424 64600',
      link: 'https://api.whatsapp.com/send?phone=+971524264600&text=Hello,%20I%20would%20like%20to%20connect%20with%20you!',
      action: 'Write Me'
    }
  ];

  return (
    <section id="contact" className="py-20 section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 font-code">
            Get In Touch 📩
          </h2>
          <p className="text-xl text-muted-foreground mb-2 font-code">
            Ready to get started on your project?
          </p>
          <p className="text-lg text-primary font-semibold font-code">
            Contact me now for a Free consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Methods */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 font-code">Talk To Me</h3>
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <Card key={index} className="hover-glow">
                  <CardContent className="p-6 text-center">
                    <div className="text-primary mb-4 flex justify-center">
                      {method.icon}
                    </div>
                    <h4 className="font-semibold text-lg mb-2 font-code">{method.title}</h4>
                    <p className="text-muted-foreground mb-4 font-code">{method.value}</p>
                    <Button variant="outline" size="sm" asChild>
                      <a href={method.link} target="_blank" rel="noopener noreferrer">
                        {method.action}
                        <Send className="h-4 w-4 ml-2" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 font-code">Write Me Your Message</h3>
            <Card className="hover-glow">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;