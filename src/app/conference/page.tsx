import Gallery from "@/components/gallery";

export default function ConferenceReport() {
  return (
    <article className="max-w-4xl mx-auto p-6 prose prose-lg prose-gray dark:prose-invert">
      <h1 className="text-3xl font-bold mb-6">
        Konferenzbericht: „Varieties of Communism“ – Der Herder Forschungsrat in Chemnitz
      </h1>
      <p className="mb-4">
        Am 17. und 18. Mai 2024 fand in Chemnitz die internationale Tagung <strong>„Varieties of Communism – Comparative Political Perspectives on Temporal and Regional Differences in Socialist Regimes“</strong> statt. Veranstaltungsort war das Alte Heizhaus der TU Chemnitz, in unmittelbarer Nähe zum Karl-Marx-Monument – einem markanten Erinnerungsort für die sozialistische Geschichte der Stadt.
      </p>
      <p className="mb-8">
        Der <strong>Herder Forschungsrat</strong> war als Kooperationspartner beteiligt und durch mehrere Mitglieder auch aktiv im Tagungsgeschehen vertreten.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Ziel &amp; Hintergrund der Konferenz</h2>
        <p>
          Das wissenschaftliche Ziel der Tagung bestand darin, <strong>kommunistische Regime im globalen Vergleich</strong> differenziert zu analysieren – mit Fokus auf <strong>zeitliche Entwicklungen</strong> und <strong>regionale Besonderheiten</strong>. Dabei ging es nicht nur um die klassischen Ostblock-Staaten, sondern auch um weniger beachtete Regionen wie Lateinamerika, Afrika oder Südostasien. Die Vielfalt kommunistischer Regime wurde bewusst in Beziehung zu anderen autoritären Systemen gesetzt.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Beiträge &amp; Perspektiven</h2>
        <p className="mb-3">
          Wissenschaftlerinnen und Wissenschaftler aus renommierten Institutionen wie der <strong>University of Michigan</strong>, der <strong>Chinese University of Hong Kong</strong>, der <strong>Universität Wien</strong>, der <strong>University of California, Berkeley</strong> und vielen weiteren präsentierten ihre aktuellen Forschungen.
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>die <strong>ideologische und institutionelle Vielfalt</strong> kommunistischer Systeme</li>
          <li>Unterschiede im Umgang mit <strong>Vergangenheit und Legitimität</strong></li>
          <li><strong>Reformen und wirtschaftliche Anpassungsprozesse</strong></li>
          <li>sowie <strong>regionale Besonderheiten</strong> von China bis Kuba</li>
        </ul>
        <p className="mt-4">
          Ein Highlight war der Stadtrundgang „<strong>Karl-Chemnitz-City</strong>“, der symbolträchtige Orte der sozialistischen und postsozialistischen Stadtgeschichte in Beziehung zur Konferenzthema setzte.
        </p>
      </section>

      <section
        className="
          w-screen 
          ml-[calc(-50vw+50%-200px)] 
          bg-gray-100 
          py-10 
          z-10
          mb-2
          relative
        "
      >
        <div className="max-w-screen-xl mx-auto px-4">
          <Gallery asRow={true} />
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            meow
          </div> */}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Beteiligung des Herder Forschungsrats</h2>
        <p>
          Der Herder Forschungsrat brachte sich mit <strong>eigenen inhaltlichen Impulsen</strong> ein, insbesondere zu Fragen der ideengeschichtlichen Tiefenschichten kommunistischer Herrschaft und deren kulturellen Nachwirkungen im gegenwärtigen Europa. Die Tagung bot auch Raum für persönliche Begegnungen, internationale Kooperationen und die Planung gemeinsamer Publikationsprojekte.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">Ein Ort der Erinnerung und der Analyse</h2>
        <p>
          Die Wahl von Chemnitz – ehemals Karl-Marx-Stadt – als Tagungsort war kein Zufall. Der monumentale Karl-Marx-Kopf, vor dem ein Gruppenfoto entstand, markierte den symbolischen wie intellektuellen Rahmen der Veranstaltung: <strong>die kritische Auseinandersetzung mit der Geschichte und Gegenwart des Kommunismus</strong> – jenseits von Mythen und Stereotypen.
        </p>
      </section>
    </article>
  )
}