import { getDictionary } from '@/lib/i18n/get-dictionary';
import { LetterForm } from '@/components/letter/letter-form';

export default async function LetterPage({ 
  params: { lang } 
}: { 
  params: { lang: string } 
}) {
  const dict = await getDictionary(lang as any);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-950 py-12">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-xl p-6 md:p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h1 className="text-3xl font-bold mb-6">{dict.letter.title}</h1>
              <LetterForm dict={dict.letter} />
            </div>
            <div className="hidden md:block">
              <div className="sticky top-8 space-y-6">
                <div className="aspect-square rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 p-6">
                  {/* Prepared for king images */}
                  <div className="text-center text-blue-900">
                    <p className="text-sm">{dict.letter.imagePrompt}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}