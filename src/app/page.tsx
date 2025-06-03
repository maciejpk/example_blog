export default function Home() {
  return (
    <div>
      <header className="bg-red-700 text-white py-6 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold">EFBI Congress 2024</h1>
          <p className="text-xl">Varieties of Communism – Comparative Political Perspectives</p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto py-10 px-4">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-2">Overview</h2>
          <p className="mb-4">
            Communism played a major role in shaping the 20th century, and its legacy persists today
            in global politics. This conference explores the diversity within communist regimes over time
            and across regions, analyzing both political ideologies and practical governance.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-2">Program: 17 May 2024</h2>
          <ul className="space-y-2">
            <li><strong>09:00–09:30:</strong> Registration and Coffee</li>
            <li><strong>09:30–10:00:</strong> Welcome Address</li>
            <li>
              <strong>10:00–11:30:</strong> Conceptual Considerations I
              <ul className="ml-6 list-disc">
                <li>Slater, Bernhard – Varieties of Communism</li>
                <li>Iza Ding – Communism and Authoritarianism</li>
                <li>Bernhard et al. – Post-Crisis Adaptation</li>
                <li>Discussant: Steffen Kailitz</li>
              </ul>
            </li>
            <li><strong>11:30–12:30:</strong> Lunch Break</li>
            <li><strong>12:30–14:30:</strong> Karl-Chemnitz-City (Brabenetz)</li>
            <li>
              <strong>14:30–16:00:</strong> Conceptual Considerations II
              <ul className="ml-6 list-disc">
                <li>Kailitz – Communist Ideocracies</li>
                <li>Kopstein – Economic History</li>
                <li>Lindenberger – Historical Comparisons</li>
                <li>Discussant: Dan Slater</li>
              </ul>
            </li>
            <li><strong>16:00–16:30:</strong> Coffee Break</li>
            <li>
              <strong>17:00–18:30:</strong> Communism in Africa, South America, and Asia
              <ul className="ml-6 list-disc">
                <li>Osei – Legacies in Africa</li>
                <li>Kneuer – Chávez’s Socialism</li>
                <li>Croissant – Party-Military in Asia</li>
                <li>Discussant: Pierre Landry</li>
              </ul>
            </li>
            <li><strong>19:00:</strong> Dinner</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-2">Program: 18 May 2024</h2>
          <ul className="space-y-2">
            <li>
              <strong>09:00–11:00:</strong> Communist China
              <ul className="ml-6 list-disc">
                <li>Gold – Hong Kong Characteristics</li>
                <li>Dimitrov – Cultural Security</li>
                <li>Landry & Zhang – Developmental Consequences</li>
                <li>Wemheuser – Market Socialism</li>
                <li>Discussant: Iza Ding</li>
              </ul>
            </li>
            <li><strong>11:00–11:30:</strong> Coffee Break</li>
            <li>
              <strong>11:30–13:00:</strong> Central and Eastern Europe I
              <ul className="ml-6 list-disc">
                <li>Grzybowska-Walecka – East-West Contacts</li>
                <li>Reichert – Creative Union Model</li>
                <li>Zysiak – Varieties of Citizenship</li>
                <li>Discussant: Stefan Garsztecki</li>
              </ul>
            </li>
            <li><strong>13:00–14:30:</strong> Lunch Break</li>
            <li>
              <strong>14:30–16:00:</strong> Central and Eastern Europe II
              <ul className="ml-6 list-disc">
                <li>Kocyba & Leistner – Civil Society</li>
                <li>Bernhard – Inverted Imperialism</li>
                <li>Stola – Communism in Poland</li>
                <li>Discussant: Matt Reichert</li>
              </ul>
            </li>
            <li><strong>16:00–16:30:</strong> Coffee Break</li>
            <li>
              <strong>16:30–18:00:</strong> Central and Eastern Europe III
              <ul className="ml-6 list-disc">
                <li>Marquardt – Institutions & Separatism</li>
                <li>Garsztecki – National Traditions</li>
                <li>Riedel – Democratic Backsliding</li>
                <li>Discussant: Michael Bernhard</li>
              </ul>
            </li>
            <li><strong>19:00:</strong> Dinner</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-2">General Information</h2>
          <p className="mb-2"><strong>Location:</strong> Altes Heizhaus, Chemnitz University of Technology</p>
          <p className="mb-2"><strong>Accommodation:</strong> Biendo Hotel, Chemnitz</p>
          <p className="mb-2"><strong>Documentation:</strong> Event will be photographed. Notify if not consented.</p>
          <p className="mb-2"><strong>Catering:</strong> Vegan and vegetarian meals available</p>
          <p className="mb-2"><strong>Registration:</strong> Contact: piotr.kocyba@uni-leipzig.de</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Organization</h2>
          <ul className="list-disc ml-6">
            <li>Piotr Kocyba</li>
            <li>Katarzyna Grzybowska-Walecka</li>
            <li>Michael Bernhard</li>
            <li>Iza Ding</li>
            <li>Stefan Garsztecki</li>
            <li>Dan Slater</li>
          </ul>
        </section>
      </main>

      <footer className="bg-gray-100 text-center py-6 text-sm">
        <p>EFBI © 2024 · <a href="https://www.efbi.de" className="text-blue-600">www.efbi.de</a></p>
      </footer>
    </div>
  );
}
