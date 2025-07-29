import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Badge } from './ui/badge';
import { Upload, Palette, Type, Image as ImageIcon } from 'lucide-react';

interface CustomPosterData {
  text: string;
  fontSize: string;
  fontFamily: string;
  textColor: string;
  backgroundColor: string;
  size: string;
  orientation: string;
  uploadedImage?: File;
}

export function CustomPosterCreator() {
  const [posterData, setPosterData] = useState<CustomPosterData>({
    text: '',
    fontSize: 'medium',
    fontFamily: 'sans-serif',
    textColor: '#000000',
    backgroundColor: '#ffffff',
    size: '24x36',
    orientation: 'portrait'
  });

  const sizes = [
    { value: '12x18', label: '12" × 18"', price: 15.99 },
    { value: '18x24', label: '18" × 24"', price: 22.99 },
    { value: '24x36', label: '24" × 36"', price: 34.99 },
    { value: '30x40', label: '30" × 40"', price: 49.99 },
  ];

  const getCurrentPrice = () => {
    const sizeData = sizes.find(s => s.value === posterData.size);
    return sizeData?.price || 0;
  };

  const handleInputChange = (field: keyof CustomPosterData, value: string) => {
    setPosterData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Create Your Custom Poster</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Design a unique poster that reflects your style. Add your own text, choose colors, 
            upload images, and create something truly personal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Design Panel */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="w-5 h-5" />
                  Design Your Poster
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="text" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="text" className="flex items-center gap-2">
                      <Type className="w-4 h-4" />
                      Text
                    </TabsTrigger>
                    <TabsTrigger value="colors" className="flex items-center gap-2">
                      <Palette className="w-4 h-4" />
                      Colors
                    </TabsTrigger>
                    <TabsTrigger value="image" className="flex items-center gap-2">
                      <ImageIcon className="w-4 h-4" />
                      Image
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="text" className="space-y-4">
                    <div>
                      <Label htmlFor="poster-text">Poster Text</Label>
                      <Textarea
                        id="poster-text"
                        placeholder="Enter your text here..."
                        value={posterData.text}
                        onChange={(e) => handleInputChange('text', e.target.value)}
                        className="min-h-[100px]"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="font-family">Font Family</Label>
                        <Select 
                          value={posterData.fontFamily} 
                          onValueChange={(value) => handleInputChange('fontFamily', value)}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="sans-serif">Sans Serif</SelectItem>
                            <SelectItem value="serif">Serif</SelectItem>
                            <SelectItem value="monospace">Monospace</SelectItem>
                            <SelectItem value="cursive">Cursive</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="font-size">Font Size</Label>
                        <Select 
                          value={posterData.fontSize} 
                          onValueChange={(value) => handleInputChange('fontSize', value)}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="small">Small</SelectItem>
                            <SelectItem value="medium">Medium</SelectItem>
                            <SelectItem value="large">Large</SelectItem>
                            <SelectItem value="extra-large">Extra Large</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="colors" className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="text-color">Text Color</Label>
                        <div className="flex gap-2 items-center">
                          <Input
                            type="color"
                            id="text-color"
                            value={posterData.textColor}
                            onChange={(e) => handleInputChange('textColor', e.target.value)}
                            className="w-12 h-12 p-1 rounded"
                          />
                          <Input
                            type="text"
                            value={posterData.textColor}
                            onChange={(e) => handleInputChange('textColor', e.target.value)}
                            className="flex-1"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="bg-color">Background Color</Label>
                        <div className="flex gap-2 items-center">
                          <Input
                            type="color"
                            id="bg-color"
                            value={posterData.backgroundColor}
                            onChange={(e) => handleInputChange('backgroundColor', e.target.value)}
                            className="w-12 h-12 p-1 rounded"
                          />
                          <Input
                            type="text"
                            value={posterData.backgroundColor}
                            onChange={(e) => handleInputChange('backgroundColor', e.target.value)}
                            className="flex-1"
                          />
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="image" className="space-y-4">
                    <div>
                      <Label htmlFor="image-upload">Upload Image (Optional)</Label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-primary transition-colors">
                        <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-600 mb-2">Click to upload or drag and drop</p>
                        <p className="text-sm text-gray-400">PNG, JPG, GIF up to 10MB</p>
                        <Input
                          type="file"
                          id="image-upload"
                          accept="image/*"
                          className="hidden"
                        />
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Size and Pricing */}
            <Card>
              <CardHeader>
                <CardTitle>Size & Pricing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="orientation">Orientation</Label>
                  <Select 
                    value={posterData.orientation} 
                    onValueChange={(value) => handleInputChange('orientation', value)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="portrait">Portrait</SelectItem>
                      <SelectItem value="landscape">Landscape</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Size Options</Label>
                  <div className="grid grid-cols-1 gap-2 mt-2">
                    {sizes.map(size => (
                      <div
                        key={size.value}
                        className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                          posterData.size === size.value 
                            ? 'border-primary bg-primary/5' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        onClick={() => handleInputChange('size', size.value)}
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{size.label}</span>
                          <Badge variant="outline">${size.price}</Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Preview Panel */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-[3/4] bg-gray-100 rounded-lg border-2 border-gray-200 p-8 flex items-center justify-center">
                  <div 
                    className="w-full h-full rounded flex items-center justify-center text-center"
                    style={{ 
                      backgroundColor: posterData.backgroundColor,
                      color: posterData.textColor,
                      fontFamily: posterData.fontFamily,
                      fontSize: posterData.fontSize === 'small' ? '1rem' : 
                                posterData.fontSize === 'medium' ? '1.5rem' :
                                posterData.fontSize === 'large' ? '2rem' : '2.5rem'
                    }}
                  >
                    {posterData.text || 'Your text will appear here...'}
                  </div>
                </div>
                
                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-600">
                    Size: {sizes.find(s => s.value === posterData.size)?.label}
                  </p>
                  <p className="text-sm text-gray-600">
                    Orientation: {posterData.orientation}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Add to Cart */}
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-medium">Total Price:</span>
                    <span className="text-2xl font-bold text-primary">
                      ${getCurrentPrice().toFixed(2)}
                    </span>
                  </div>
                  
                  <Button className="w-full" size="lg">
                    Add Custom Poster to Cart
                  </Button>
                  
                  <p className="text-xs text-gray-500 text-center">
                    High-quality print on premium paper with fast shipping
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}