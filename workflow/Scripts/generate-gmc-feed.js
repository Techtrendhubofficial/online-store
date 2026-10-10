import fs from 'fs';
import path from 'path';
import { XMLBuilder } from 'fast-xml-parser'; // npm install fast-xml-parser

const products = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'products.json'), 'utf8'));

const feedItems = products.map(product => ({
  item: {
    id: product.id,
    title: product.title,
    description: product.description,
    link: `https://techtrendhub.my/categories/${product.category}/${product.slug}`,
    image_link: product.imageUrl,
    price: `RM ${product.price}`,
    availability: product.stock > 0 ? 'in stock' : 'out of stock',
    return_policy_label: 'https://techtrendhub.my/refund-policy'
  }
}));

const builder = new XMLBuilder({ ignoreAttributes: false, format: true });
const xmlFeed = builder.build({ rss: { '@_version': '2.0', '@_xmlns:g': 'http://base.google.com/ns/1.0', channel: { item: feedItems } } });

fs.writeFileSync(path.join(process.cwd(), 'public/gmc-feed.xml'), xmlFeed);
console.log('✅ GMC Feed generated successfully at public/gmc-feed.xml');
