import Link from 'next/link';
import Image from 'next/image';
import {getBlogs} from '@/sanity/lib/fetchBlogs';

export const generateStaticParams = async () => {
  const blogs = await getBlogs();
  return blogs.map(blog => ({
    slug: blog.slug.current,
  }));
};

export const revalidate = 0;

const RecentBlogs = async () => {
  const blogs = await getBlogs();
  const recentBlogs = blogs.slice(0, 6);

  return (
    <section className='py-8 sm:py-16 bg-primary'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-2xl sm:text-3xl font-bold text-secondary mb-6'>
          Recent Blogs
        </h2>
        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {recentBlogs.map(blog => (
            <div
              key={blog._id}
              className='bg-accent rounded-lg shadow-md overflow-hidden'
            >
              <Link href={`/blogs/${blog.slug.current}`}>
                <div className='relative w-full h-48'>
                  <Image
                    src={blog.mainImage.asset.url}
                    alt={blog.title}
                    layout='fill'
                    objectFit='cover'
                    sizes='(max-width: 768px) 100vw, 
                          (max-width: 1200px) 50vw, 
                          33vw'
                  />
                </div>
                <div className='p-6'>
                  <h3 className='text-lg font-semibold mb-2'>{blog.title}</h3>
                  <p className='text-gray-700 text-sm mb-4'>{blog.excerpt}</p>
                  <Link
                    href={`/blogs/${blog.slug.current}`}
                    className='text-red-400 hover:underline'
                  >
                    Read more
                  </Link>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentBlogs;
