import React from "react";
import Link from "next/link";
// internal
import RegisterForm from "@components/forms/register-form";

const Datenschutz = () => {
  return (
    <section className="login__area pt-110 pb-110">
      <div className="container">
        <div
          className="row justify-content-center wow fadeInUp"
          data-wow-delay=".3s"
        >
          <div className="col-md-8">
            <div className="section__title mb-55 text-center">
              {/* <span className="sub-title">Impressum</span> */}
              <h2 className="title">Datenschutzerklärung</h2>
            </div>
          </div>
        </div>
        <h4 className="pt-40 pb-1">Einleitung</h4>
        <p>
          Mit der folgenden Datenschutzerklärung möchten wir Sie darüber
          aufklären, welche Arten Ihrer personenbezogenen Daten (nachfolgend
          auch kurz als &#8222;Daten“ bezeichnet) wir zu welchen Zwecken und in
          welchem Umfang verarbeiten. Die Datenschutzerklärung gilt für alle von
          uns durchgeführten Verarbeitungen personenbezogener Daten, sowohl im
          Rahmen der Erbringung unserer Leistungen als auch insbesondere auf
          unseren Webseiten, mobil, als auch innerhalb externer Onlinepräsenzen,
          wie z.B. unserer Social-Media-Profile (nachfolgend zusammenfassend
          bezeichnet als &#8222;Onlineangebot“).
        </p>
        <p>Die verwendeten Begriffe sind nicht geschlechtsspezifisch.</p>
        <p>Stand: 01.08.2023</p>
        <h4 className="pt-40 pb-1">Inhaltsübersicht</h4>
        <ul>
          <li>
            <a href="#m14">Einleitung</a>
          </li>
          <li>
            <a href="#m3">Verantwortlicher</a>
          </li>
          <li>
            <a href="#mOverview">Übersicht der Verarbeitungen</a>
          </li>
          <li>
            <a href="#m11">Kontakt Datenschutzbeauftragter</a>
          </li>
          <li>
            <a href="#m13">Maßgebliche Rechtsgrundlagen</a>
          </li>
          <li>
            <a href="#m27">Sicherheitsmaßnahmen</a>
          </li>
          <li>
            <a href="#m25">
              Übermittlung und Offenbarung von personenbezogenen Daten
            </a>
          </li>
          <li>
            <a href="#m24">Datenverarbeitung in Drittländern</a>
          </li>
          <li>
            <a href="#m134">Einsatz von Cookies</a>
          </li>
          <li>
            <a href="#m317">Kommerzielle und geschäftliche Leistungen</a>
          </li>
          <li>
            <a href="#m326">Zahlungsdienstleister</a>
          </li>
          <li>
            <a href="#m325">Bonitätsprüfung</a>
          </li>
          <li>
            <a href="#m225">
              Bereitstellung des Onlineangebotes und Webhosting
            </a>
          </li>
          <li>
            <a href="#m182">Kontaktaufnahme</a>
          </li>
          <li>
            <a href="#m17">Newsletter und elektronische Benachrichtigungen</a>
          </li>
          <li>
            <a href="#m263">Webanalyse, Monitoring und Optimierung</a>
          </li>
          <li>
            <a href="#m264">Onlinemarketing</a>
          </li>
          <li>
            <a href="#m136">Präsenzen in sozialen Netzwerken (Social Media)</a>
          </li>
          <li>
            <a href="#m328">
              Plugins und eingebettete Funktionen sowie Inhalte
            </a>
          </li>
          <li>
            <a href="#m12">Löschung von Daten</a>
          </li>
          <li>
            <a href="#m15">
              Änderung und Aktualisierung der Datenschutzerklärung
            </a>
          </li>
          <li>
            <a href="#m10">Rechte der betroffenen Personen</a>
          </li>
          <li>
            <a href="#m42">Begriffsdefinitionen</a>
          </li>
        </ul>
        <h4 className="pt-40 pb-1" id="m3">
          Verantwortlicher
        </h4>
        <div>WEE Holding GmbH</div>
        <div>Franz-Lenz-Str. 1</div>
        <div>D-49084 Osnabrück</div>
        <p>
          <strong>E-Mail-Adresse:</strong>
          <br /> info@wee.gmbh
        </p>
        <p>
          <strong>Telefon:</strong>
          <br />
          +49 541 444404-0
        </p>
        <h4 className="pt-40 pb-1" id="m11">
          Kontakt Datenschutzbeauftragter
        </h4>
        <div>WEE Holding GmbH</div>
        <div>Franz-Lenz-Str. 1</div>
        <div>D-49084 Osnabrück</div>
        <p> Deutschland</p>
        <h4 className="pt-40 pb-1" id="mOverview">
          Übersicht der Verarbeitungen
        </h4>
        <p>
          Die nachfolgende Übersicht fasst die Arten der verarbeiteten Daten und
          die Zwecke ihrer Verarbeitung zusammen und verweist auf die
          betroffenen Personen.
        </p>
        <h4 className="pt-40 pb-1">Arten der verarbeiteten Daten</h4>
        <ul>
          <li>Bestandsdaten (z.B. Namen, Adressen).</li>
          <li>Inhaltsdaten (z.B. Eingaben in Onlineformularen).</li>
          <li>Kontaktdaten (z.B. E-Mail, Telefonnummern).</li>
          <li>
            Meta-/Kommunikationsdaten (z.B. Geräte-Informationen, IP-Adressen).
          </li>
          <li>
            Nutzungsdaten (z.B. besuchte Webseiten, Interesse an Inhalten,
            Zugriffszeiten).
          </li>
          <li>
            Standortdaten (Angaben zur geografischen Position eines Gerätes oder
            einer Person).
          </li>
          <li>
            Vertragsdaten (z.B. Vertragsgegenstand, Laufzeit, Kundenkategorie).
          </li>
          <li>
            Zahlungsdaten (z.B. Bankverbindungen, Rechnungen, Zahlungshistorie).
          </li>
        </ul>
        <h4 className="pt-40 pb-1">Kategorien betroffener Personen</h4>
        <ul>
          <li>Geschäfts- und Vertragspartner.</li>
          <li>Interessenten.</li>
          <li>Kommunikationspartner.</li>
          <li>Kunden.</li>
          <li>Nutzer (z.B. Webseitenbesucher, Nutzer von Onlinediensten).</li>
        </ul>
        <h4 className="pt-40 pb-1">Zwecke der Verarbeitung</h4>
        <ul>
          <li>Beurteilung der Bonität und Kreditwürdigkeit.</li>
          <li>
            Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit.
          </li>
          <li>Besuchsaktionsauswertung.</li>
          <li>Büro- und Organisationsverfahren.</li>
          <li>
            Cross-Device Tracking (geräteübergreifende Verarbeitung von
            Nutzerdaten für Marketingzwecke).
          </li>
          <li>Direktmarketing (z.B. per E-Mail oder postalisch).</li>
          <li>Interessenbasiertes und verhaltensbezogenes Marketing.</li>
          <li>Kontaktanfragen und Kommunikation.</li>
          <li>
            Konversionsmessung (Messung der Effektivität von
            Marketingmaßnahmen).
          </li>
          <li>Profiling (Erstellen von Nutzerprofilen).</li>
          <li>Remarketing.</li>
          <li>
            Reichweitenmessung (z.B. Zugriffsstatistiken, Erkennung
            wiederkehrender Besucher).
          </li>
          <li>Sicherheitsmaßnahmen.</li>
          <li>
            Tracking (z.B. interessens-/verhaltensbezogenes Profiling, Nutzung
            von Cookies).
          </li>
          <li>Erbringung vertragliche Leistungen und Kundenservice.</li>
          <li>Verwaltung und Beantwortung von Anfragen.</li>
          <li>
            Zielgruppenbildung (Bestimmung von für Marketingzwecke relevanten
            Zielgruppen oder sonstige Ausgabe von Inhalten).
          </li>
        </ul>
        <h4 className="pt-40 pb-1">
          Automatisierte Entscheidungen im Einzelfall
        </h4>
        <ul>
          <li>
            Bonitätsauskunft (Entscheidung auf Grundlage einer Bonitätsprüfung).
          </li>
        </ul>
        <h4 className="pt-40 pb-1" id="m13">
          Maßgebliche Rechtsgrundlagen
        </h4>
        <p>
          Im Folgenden teilen wir die Rechtsgrundlagen der
          Datenschutzgrundverordnung (DSGVO), auf deren Basis wir die
          personenbezogenen Daten verarbeiten, mit. Bitte beachten Sie, dass
          zusätzlich zu den Regelungen der DSGVO die nationalen
          Datenschutzvorgaben in Ihrem bzw. unserem Wohn- und Sitzland gelten
          können. Sollten ferner im Einzelfall speziellere Rechtsgrundlagen
          maßgeblich sein, teilen wir Ihnen diese in der Datenschutzerklärung
          mit.
        </p>
        <ul>
          <li>
            <strong>Einwilligung (Art. 6 Abs. 1 S. 1 lit. a. DSGVO)</strong>
            &#8211;Die betroffene Person hat ihre Einwilligung in die
            Verarbeitung der sie betreffenden personenbezogenen Daten für einen
            spezifischen Zweck oder mehrere bestimmte Zwecke gegeben.
          </li>
          <li>
            <strong>
              Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1
              lit. b. DSGVO)
            </strong>
            &#8211;Die Verarbeitung ist für die Erfüllung eines Vertrags, dessen
            Vertragspartei die betroffene Person ist, oder zur Durchführung
            vorvertraglicher Maßnahmen erforderlich, die auf Anfrage der
            betroffenen Person erfolgen.
          </li>
          <li>
            <strong>
              Rechtliche Verpflichtung (Art. 6 Abs. 1 S. 1 lit. c. DSGVO)
            </strong>
            &#8211;Die Verarbeitung ist zur Erfüllung einer rechtlichen
            Verpflichtung erforderlich, der der Verantwortliche unterliegt.
          </li>
          <li>
            <strong>
              Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO)
            </strong>
            &#8211;Die Verarbeitung ist zur Wahrung der berechtigten Interessen
            des Verantwortlichen oder eines Dritten erforderlich, sofern nicht
            die Interessen oder Grundrechte und Grundfreiheiten der betroffenen
            Person, die den Schutz personenbezogener Daten erfordern,
            überwiegen.
          </li>
        </ul>
        <h4 className="pt-40 pb-1" id="m27">
          Sicherheitsmaßnahmen
        </h4>
        <p>
          Wir treffen nach Maßgabe der gesetzlichen Vorgaben unter
          Berücksichtigung des Stands der Technik, der Implementierungskosten
          und der Art, des Umfangs, der Umstände und der Zwecke der Verarbeitung
          sowie der unterschiedlichen Eintrittswahrscheinlichkeiten und des
          Ausmaßes der Bedrohung der Rechte und Freiheiten natürlicher Personen
          geeignete technische und organisatorische Maßnahmen, um ein dem Risiko
          angemessenes Schutzniveau zu gewährleisten.
        </p>
        <p>
          Zu den Maßnahmen gehören insbesondere die Sicherung der
          Vertraulichkeit, Integrität und Verfügbarkeit von Daten durch
          Kontrolle des physischen und elektronischen Zugangs zu den Daten als
          auch des sie betreffenden Zugriffs, der Eingabe, der Weitergabe, der
          Sicherung der Verfügbarkeit und ihrer Trennung. Des Weiteren haben wir
          Verfahren eingerichtet, die eine Wahrnehmung von Betroffenenrechten,
          die Löschung von Daten und Reaktionen auf die Gefährdung der Daten
          gewährleisten. Ferner berücksichtigen wir den Schutz personenbezogener
          Daten bereits bei der Entwicklung bzw. Auswahl von Hardware, Software
          sowie Verfahren entsprechend dem Prinzip des Datenschutzes, durch
          Technikgestaltung und durch datenschutzfreundliche Voreinstellungen.
        </p>
        <p>
          <strong>SSL-Verschlüsselung (https)</strong>: Um Ihre via unser
          Online-Angebot übermittelten Daten zu schützen, nutzen wir eine
          SSL-Verschlüsselung. Sie erkennen derart verschlüsselte Verbindungen
          an dem Präfix https:// in der Adresszeile Ihres Browsers.
        </p>
        <h4 className="pt-40 pb-1" id="m25">
          Übermittlung und Offenbarung von personenbezogenen Daten
        </h4>
        <p>
          Im Rahmen unserer Verarbeitung von personenbezogenen Daten kommt es
          vor, dass die Daten an andere Stellen, Unternehmen, rechtlich
          selbstständige Organisationseinheiten oder Personen übermittelt oder
          sie ihnen gegenüber offengelegt werden. Zu den Empfängern dieser Daten
          können z.B. Zahlungsinstitute im Rahmen von Zahlungsvorgängen, mit
          IT-Aufgaben beauftragte Dienstleister oder Anbieter von Diensten und
          Inhalten, die in eine Webseite eingebunden werden, gehören. In solchen
          Fall beachten wir die gesetzlichen Vorgaben und schließen insbesondere
          entsprechende Verträge bzw. Vereinbarungen, die dem Schutz Ihrer Daten
          dienen, mit den Empfängern Ihrer Daten ab.
        </p>
        <h4 className="pt-40 pb-1" id="m24">
          Datenverarbeitung in Drittländern
        </h4>
        <p>
          Sofern wir Daten in einem Drittland (d.h., außerhalb der Europäischen
          Union (EU), des Europäischen Wirtschaftsraums (EWR)) verarbeiten oder
          die Verarbeitung im Rahmen der Inanspruchnahme von Diensten Dritter
          oder der Offenlegung bzw. Übermittlung von Daten an andere Personen,
          Stellen oder Unternehmen stattfindet, erfolgt dies nur im Einklang mit
          den gesetzlichen Vorgaben.
        </p>
        <p>
          Vorbehaltlich ausdrücklicher Einwilligung oder vertraglich oder
          gesetzlich erforderlicher Übermittlung verarbeiten oder lassen wir die
          Daten nur in Drittländern mit einem anerkannten Datenschutzniveau,
          vertraglichen Verpflichtung durch sogenannte Standardschutzklauseln
          der EU-Kommission, beim Vorliegen von Zertifizierungen oder
          verbindlicher internen Datenschutzvorschriften verarbeiten (Art. 44
          bis 49 DSGVO, Informationsseite der EU-Kommission:{" "}
          <a href="https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection_de">
            https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection_de
          </a>
          ).
        </p>
        <h4 className="pt-40 pb-1" id="m134">
          Einsatz von Cookies
        </h4>
        <p>
          Cookies sind kleine Textdateien, bzw. sonstige Speichervermerke, die
          Informationen auf Endgeräten speichern und Informationen aus den
          Endgeräten auslesen. Z.B. um den Login-Status in einem Nutzerkonto,
          einen Warenkorbinhalt in einem E-Shop, die aufgerufenen Inhalte oder
          verwendete Funktionen eines Onlineangebotes speichern. Cookies können
          ferner zu unterschiedlichen Zwecken eingesetzt werden, z.B. zu Zwecken
          der Funktionsfähigkeit, Sicherheit und Komfort von Onlineangeboten
          sowie der Erstellung von Analysen der Besucherströme.
        </p>
        <p>
          <strong>Hinweise zur Einwilligung:&nbsp;</strong>
          Wir setzen Cookies im Einklang mit den gesetzlichen Vorschriften ein.
          Daher holen wir von den Nutzern eine vorhergehende Einwilligung ein,
          außer wenn diese gesetzlich nicht gefordert ist. Eine Einwilligung ist
          insbesondere nicht notwendig, wenn das Speichern und das Auslesen der
          Informationen, also auch von Cookies, unbedingt erforderlich sind, um
          dem den Nutzern einen von ihnen ausdrücklich gewünschten
          Telemediendienst (also unser Onlineangebot) zur Verfügung zu stellen.
          Die widerrufliche Einwilligung wird gegenüber den Nutzern deutlich
          kommuniziert und enthält die Informationen zu der jeweiligen
          Cookie-Nutzung.
        </p>
        <p>
          <strong>
            Hinweise zu datenschutzrechtlichen Rechtsgrundlagen:&nbsp;
          </strong>
          Auf welcher datenschutzrechtlichen Rechtsgrundlage wir die
          personenbezogenen Daten der Nutzer mit Hilfe von Cookies verarbeiten,
          hängt davon ab, ob wir Nutzer um eine Einwilligung bitten. Falls die
          Nutzer einwilligen, ist die Rechtsgrundlage der Verarbeitung Ihrer
          Daten die erklärte Einwilligung. Andernfalls werden die mithilfe von
          Cookies verarbeiteten Daten auf Grundlage unserer berechtigten
          Interessen (z.B. an einem betriebswirtschaftlichen Betrieb unseres
          Onlineangebotes und Verbesserung seiner Nutzbarkeit) verarbeitet oder,
          wenn dies im Rahmen der Erfüllung unserer vertraglichen Pflichten
          erfolgt, wenn der Einsatz von Cookies erforderlich ist, um unsere
          vertraglichen Verpflichtungen zu erfüllen. Zu welchen Zwecken die
          Cookies von uns verarbeitet werden, darüber klären wir im Laufe dieser
          Datenschutzerklärung oder im Rahmen von unseren Einwilligungs- und
          Verarbeitungsprozessen auf.
        </p>
        <p>
          <strong>Speicherdauer:&nbsp;</strong>
          Im Hinblick auf die Speicherdauer werden die folgenden Arten von
          Cookies unterschieden:
        </p>
        <ul>
          <li>
            <strong>
              Temporäre Cookies (auch: Session- oder Sitzungs-Cookies):
            </strong>
            Temporäre Cookies werden spätestens gelöscht, nachdem ein Nutzer ein
            Online-Angebot verlassen und sein Endgerät (z.B. Browser oder mobile
            Applikation) geschlossen hat.
          </li>
          <li>
            <strong>Permanente Cookies:</strong>
            &nbsp;Permanente Cookies bleiben auch nach dem Schließen des
            Endgerätes gespeichert. So können beispielsweise der Login-Status
            gespeichert oder bevorzugte Inhalte direkt angezeigt werden, wenn
            der Nutzer eine Website erneut besucht. Ebenso können die mit Hilfe
            von Cookies erhobenen Daten der Nutzer zur Reichweitenmessung
            verwendet werden. Sofern wir Nutzern &nbsp;keine expliziten Angaben
            zur Art und Speicherdauer von Cookies mitteilen (z. B. im Rahmen der
            Einholung der Einwilligung), sollten Nutzer davon ausgehen, dass
            Cookies permanent sind und die Speicherdauer bis zu zwei Jahre
            betragen kann.
          </li>
        </ul>
        <p>
          <strong>
            Allgemeine Hinweise zum Widerruf und Widerspruch (Opt-Out):
          </strong>
          Abhängig davon, ob die Verarbeitung auf Grundlage einer Einwilligung
          oder gesetzlichen Erlaubnis erfolgt, haben Sie jederzeit die
          Möglichkeit, eine erteilte Einwilligung zu widerrufen oder der
          Verarbeitung Ihrer Daten durch Cookie-Technologien zu widersprechen
          (zusammenfassend als &#8222;Opt-Out &#8220;bezeichnet). Sie können
          Ihren Widerspruch zunächst mittels der Einstellungen Ihres Browsers
          erklären, z.B., indem Sie die Nutzung von Cookies deaktivieren (wobei
          hierdurch auch die Funktionsfähigkeit unseres Onlineangebotes
          eingeschränkt werden kann). Ein Widerspruch gegen den Einsatz von
          Cookies zu Zwecken des Onlinemarketings kann auch mittels einer
          Vielzahl von Diensten, vor allem im Fall des Trackings, über die
          Webseiten{" "}
          <a href="https://optout.aboutads.info">
            https://optout.aboutads.info
          </a>
          und{" "}
          <a href="https://www.youronlinechoices.com/">
            https://www.youronlinechoices.com/
          </a>
          erklärt werden. Daneben können Sie weitere Widerspruchshinweise im
          Rahmen der Angaben zu den eingesetzten Dienstleistern und Cookies
          erhalten.
        </p>
        <h4 className="pt-40 pb-1" id="m317">
          Kommerzielle und geschäftliche Leistungen
        </h4>
        <p>
          Wir verarbeiten Daten unserer Vertrags- und Geschäftspartner, z.B.
          Kunden und Interessenten (zusammenfassend bezeichnet als
          &#8222;Vertragspartner &#8220;) im Rahmen von vertraglichen und
          vergleichbaren Rechtsverhältnissen sowie damit verbundenen Maßnahmen
          und im Rahmen der Kommunikation mit den Vertragspartnern (oder
          vorvertraglich), z.B., um Anfragen zu beantworten.
        </p>
        <p>
          Diese Daten verarbeiten wir zur Erfüllung unserer vertraglichen
          Pflichten, zur Sicherung unserer Rechte und zu Zwecken der mit diesen
          Angaben einhergehenden Verwaltungsaufgaben sowie der unternehmerischen
          Organisation. Die Daten der Vertragspartner geben wir im Rahmen des
          geltenden Rechts nur insoweit an Dritte weiter, als dies zu den
          vorgenannten Zwecken oder zur Erfüllung gesetzlicher Pflichten
          erforderlich ist oder mit Einwilligung der betroffenen Personen
          erfolgt (z.B. an beteiligte Telekommunikations-, Transport- und
          sonstige Hilfsdienste sowie Subunternehmer, Banken, Steuer- und
          Rechtsberater, Zahlungsdienstleister oder Steuerbehörden). Über
          weitere Verarbeitungsformen, z.B. zu Zwecken des Marketings, werden
          die Vertragspartner im Rahmen dieser Datenschutzerklärung informiert.
        </p>
        <p>
          Welche Daten für die vorgenannten Zwecke erforderlich sind, teilen wir
          den Vertragspartnern vor oder im Rahmen der Datenerhebung, z.B. in
          Onlineformularen, durch besondere Kennzeichnung (z.B. Farben) bzw.
          Symbole (z.B. Sternchen o.ä.), oder persönlich mit.
        </p>
        <p>
          Wir löschen die Daten nach Ablauf gesetzlicher Gewährleistungs- und
          vergleichbarer Pflichten, d.h., grundsätzlich nach Ablauf von 4
          Jahren, es sei denn, dass die Daten in einem Kundenkonto gespeichert
          werden, z.B., solange sie aus gesetzlichen Gründen der Archivierung
          aufbewahrt werden müssen (z.B. für Steuerzwecke im Regelfall 10
          Jahre). Daten, die uns im Rahmen eines Auftrags durch den
          Vertragspartner offengelegt wurden, löschen wir entsprechend den
          Vorgaben des Auftrags, grundsätzlich nach Ende des Auftrags.
        </p>
        <p>
          Soweit wir zur Erbringung unserer Leistungen Drittanbieter oder
          Plattformen einsetzen, gelten im Verhältnis zwischen den Nutzern und
          den Anbietern die Geschäftsbedingungen und Datenschutzhinweise der
          jeweiligen Drittanbieter oder Plattformen.
        </p>
        <p>
          <strong>Kundenkonto</strong>: Vertragspartner können innerhalb unseres
          Onlineangebotes ein Konto anlegen (z.B. Kunden- bzw. Nutzerkonto, kurz
          &#8222;Kundenkonto &#8220;). Falls die Registrierung eines
          Kundenkontos erforderlich ist, werden Vertragspartner hierauf ebenso
          hingewiesen wie auf die für die Registrierung erforderlichen Angaben.
          Die Kundenkonten sind nicht öffentlich und können von Suchmaschinen
          nicht indexiert werden. Im Rahmen der Registrierung sowie
          anschließender Anmeldungen und Nutzungen des Kundenkontos speichern
          wir die IP-Adressen der Kunden nebst den Zugriffszeitpunkten, um die
          Registrierung nachweisen und etwaigem Missbrauch des Kundenkontos
          vorbeugen zu können.
        </p>
        <p>
          Wenn Kunden ihr Kundenkonto gekündigt haben, werden die das
          Kundenkonto betreffenden Daten gelöscht, vorbehaltlich, deren
          Aufbewahrung ist aus gesetzlichen Gründen erforderlich. Es obliegt den
          Kunden, ihre Daten bei erfolgter Kündigung des Kundenkontos zu
          sichern.
        </p>
        <p>
          <strong>Wirtschaftliche Analysen und Marktforschung</strong>: Aus
          betriebswirtschaftlichen Gründen und um Markttendenzen, Wünsche der
          Vertragspartner und Nutzer erkennen zu können, analysieren wir die uns
          vorliegenden Daten zu Geschäftsvorgängen, Verträgen, Anfragen, etc.,
          wobei in die Gruppe der betroffenen Personen Vertragspartner,
          Interessenten, Kunden, Besucher und Nutzer unseres Onlineangebotes
          fallen können.
        </p>
        <p>
          Die Analysen erfolgen zum Zweck betriebswirtschaftlicher Auswertungen,
          des Marketings und der Marktforschung (z.B. zur Bestimmung von
          Kundengruppen mit unterschiedlichen Eigenschaften). Dabei können wir,
          sofern vorhanden, die Profile von registrierten Nutzern samt ihrer
          Angaben, z.B. zu in Anspruch genommenen Leistungen, berücksichtigen.
          Die Analysen dienen alleine uns und werden nicht extern offenbart,
          sofern es sich nicht um anonyme Analysen mit zusammengefassten, also
          anonymisierten Werten handelt. Ferner nehmen wir Rücksicht auf die
          Privatsphäre der Nutzer und verarbeiten die Daten zu den
          Analysezwecken möglichst pseudonym und, sofern machbar, anonym (z.B.
          als zusammengefasste Daten).
        </p>
        <p>
          <strong>Shop und E-Commerce</strong>: Wir verarbeiten die Daten
          unserer Kunden, um ihnen die Auswahl, den Erwerb, bzw. die Bestellung
          der gewählten Produkte, Waren sowie verbundener Leistungen, als auch
          deren Bezahlung und Zustellung, bzw. Ausführung zu ermöglichen. Sofern
          für die Ausführung einer Bestellung erforderlich, setzen wir
          Dienstleister, insbesondere Post-, Speditions- und Versandunternehmen
          ein, um die Lieferung, bzw. Ausführung gegenüber unseren Kunden
          durchzuführen. Für die Abwicklung der Zahlungsvorgänge nehmen wir die
          Dienste von Banken und Zahlungsdienstleistern in Anspruch. Die
          erforderlichen Angaben sind als solche im Rahmen des Bestell- bzw.
          vergleichbaren Erwerbsvorgangs gekennzeichnet und umfassen die zur
          Auslieferung, bzw. Zurverfügungstellung und Abrechnung benötigten
          Angaben sowie Kontaktinformationen, um etwaige Rücksprache halten zu
          können.
        </p>
        <ul>
          <li>
            <strong>Verarbeitete Datenarten:</strong>
            Bestandsdaten (z.B. Namen, Adressen), Zahlungsdaten (z.B.
            Bankverbindungen, Rechnungen, Zahlungshistorie), Kontaktdaten (z.B.
            E-Mail, Telefonnummern), Vertragsdaten (z.B. Vertragsgegenstand,
            Laufzeit, Kundenkategorie), Nutzungsdaten (z.B. besuchte Webseiten,
            Interesse an Inhalten, Zugriffszeiten), Meta-/Kommunikationsdaten
            (z.B. Geräte-Informationen, IP-Adressen).
          </li>
          <li>
            <strong>Betroffene Personen:</strong>
            Interessenten, Geschäfts- und Vertragspartner, Kunden.
          </li>
          <li>
            <strong>Zwecke der Verarbeitung:</strong>
            Erbringung vertragliche Leistungen und Kundenservice,
            Kontaktanfragen und Kommunikation, Büro- und Organisationsverfahren,
            Verwaltung und Beantwortung von Anfragen, Sicherheitsmaßnahmen,
            Besuchsaktionsauswertung, Interessenbasiertes und
            verhaltensbezogenes Marketing, Profiling (Erstellen von
            Nutzerprofilen).
          </li>
          <li>
            <strong>Rechtsgrundlagen:</strong>
            Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1
            lit. b. DSGVO), Rechtliche Verpflichtung (Art. 6 Abs. 1 S. 1 lit. c.
            DSGVO), Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO).
          </li>
        </ul>
        <h4 className="pt-40 pb-1" id="m326">
          Zahlungsdienstleister
        </h4>
        <p>
          Im Rahmen von Vertrags- und sonstigen Rechtsbeziehungen, aufgrund
          gesetzlicher Pflichten oder sonst auf Grundlage unserer berechtigten
          Interessen bieten wir den betroffenen Personen effiziente und sichere
          Zahlungsmöglichkeiten an und setzen hierzu neben Banken und
          Kreditinstituten weitere Zahlungsdienstleister ein (zusammenfassend
          &#8222;Zahlungsdienstleister &#8220;).
        </p>
        <p>
          Zu den durch die Zahlungsdienstleister verarbeiteten Daten gehören
          Bestandsdaten, wie z.B. der Name und die Adresse, Bankdaten, wie z.B.
          Kontonummern oder Kreditkartennummern, Passwörter, TANs und Prüfsummen
          sowie die Vertrags-, Summen- und empfängerbezogenen Angaben. Die
          Angaben sind erforderlich, um die Transaktionen durchzuführen. Die
          eingegebenen Daten werden jedoch nur durch die Zahlungsdienstleister
          verarbeitet und bei diesen gespeichert. D.h., wir erhalten keine
          konto- oder kreditkartenbezogenen Informationen, sondern lediglich
          Informationen mit Bestätigung oder Negativbeauskunftung der Zahlung.
          Unter Umständen werden die Daten seitens der Zahlungsdienstleister an
          Wirtschaftsauskunfteien übermittelt. Diese Übermittlung bezweckt die
          Identitäts- und Bonitätsprüfung. Hierzu verweisen wir auf die AGB und
          die Datenschutzhinweise der Zahlungsdienstleister.
        </p>
        <p>
          Für die Zahlungsgeschäfte gelten die Geschäftsbedingungen und die
          Datenschutzhinweise der jeweiligen Zahlungsdienstleister, welche
          innerhalb der jeweiligen Webseiten bzw. Transaktionsapplikationen
          abrufbar sind. Wir verweisen auf diese ebenfalls zwecks weiterer
          Informationen und Geltendmachung von Widerrufs-, Auskunfts- und
          anderen Betroffenenrechten.
        </p>
        <ul>
          <li>
            <strong>Verarbeitete Datenarten:</strong>
            Bestandsdaten (z.B. Namen, Adressen), Zahlungsdaten (z.B.
            Bankverbindungen, Rechnungen, Zahlungshistorie), Vertragsdaten (z.B.
            Vertragsgegenstand, Laufzeit, Kundenkategorie), Nutzungsdaten (z.B.
            besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten),
            Meta-/Kommunikationsdaten (z.B. Geräte-Informationen, IP-Adressen).
          </li>
          <li>
            <strong>Betroffene Personen:</strong>
            Kunden, Interessenten.
          </li>
          <li>
            <strong>Zwecke der Verarbeitung:</strong>
            Erbringung vertragliche Leistungen und Kundenservice.
          </li>
          <li>
            <strong>Rechtsgrundlagen:</strong>
            Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1
            lit. b. DSGVO), Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f.
            DSGVO).
          </li>
        </ul>
        <p>
          <strong>Eingesetzte Dienste und Diensteanbieter:</strong>
        </p>
        <ul>
          <li>
            <strong>PayPal:</strong>
            Zahlungsdienstleistungen und -Lösungen (z.B. PayPal, PayPal Plus,
            Braintree); Dienstanbieter: PayPal (Europe) S.à r.l. et Cie, S.C.A.,
            22-24 Boulevard Royal, L-2449 Luxembourg; Website:{" "}
            <a href="https://www.paypal.com/de">https://www.paypal.com/de</a>;
            Datenschutzerklärung:{" "}
            <a href="https://www.paypal.com/de/webapps/mpp/ua/privacy-full">
              https://www.paypal.com/de/webapps/mpp/ua/privacy-full
            </a>
            .
          </li>
        </ul>
        <h4 className="pt-40 pb-1" id="m325">
          Bonitätsprüfung
        </h4>
        <p>
          Sofern wir in Vorleistung treten oder vergleichbare wirtschaftliche
          Risiken eingehen (z.B. beim Bestellung auf Rechnung), behalten wir uns
          vor, zur Wahrung der berechtigten Interessen eine Identitäts- und
          Bonitätsauskunft zwecks Beurteilung des Kreditrisikos auf Basis von
          mathematisch-statistischen Verfahren von hierauf spezialisierten
          Dienstleistungsunternehmen (Wirtschaftsauskunfteien) einzuholen.
        </p>
        <p>
          Die von den Wirtschaftsauskunfteien erhaltenen Informationen über die
          statistische Wahrscheinlichkeit eines Zahlungsausfalls verarbeiten wir
          im Rahmen einer sachgerechten Ermessensentscheidung über die
          Begründung, Durchführung und Beendigung des Vertragsverhältnisses. Wir
          behalten uns vor, im Fall eines negativen Ergebnisses der
          Bonitätsprüfung, die Zahlung auf Rechnung oder eine andere Vorleistung
          zu verweigern.
        </p>
        <p>
          Die Entscheidung, ob wir in Vorleistung treten, erfolgt entsprechend
          Art. 22 DSGVO alleine auf Grundlage einer automatisierten Entscheidung
          im Einzelfall, die unsere Software unter Zugrundelegung der Auskunft
          der Wirtschaftsauskunftei vornimmt.
        </p>
        <p>
          Sofern wir eine ausdrückliche Einwilligung von Vertragspartnern
          einholen, ist die Rechtsgrundlage für die Bonitätsauskunft und die
          Übermittlung der Daten des Kunden an die Auskunfteien die
          Einwilligung. Falls keine Einwilligung eingeholt wird, erfolgt die
          Bonitätsauskunft auf Grundlage unserer berechtigten Interessen an der
          Ausfallsicherheit unserer Zahlungsforderungen.
        </p>
        <ul>
          <li>
            <strong>Verarbeitete Datenarten:</strong>
            Bestandsdaten (z.B. Namen, Adressen), Zahlungsdaten (z.B.
            Bankverbindungen, Rechnungen, Zahlungshistorie), Kontaktdaten (z.B.
            E-Mail, Telefonnummern), Vertragsdaten (z.B. Vertragsgegenstand,
            Laufzeit, Kundenkategorie).
          </li>
          <li>
            <strong>Betroffene Personen:</strong>
            Kunden, Interessenten.
          </li>
          <li>
            <strong>Zwecke der Verarbeitung:</strong>
            Beurteilung der Bonität und Kreditwürdigkeit.
          </li>
          <li>
            <strong>Rechtsgrundlagen:</strong>
            Einwilligung (Art. 6 Abs. 1 S. 1 lit. a. DSGVO), Berechtigte
            Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO).
          </li>
          <li>
            <strong>Automatisierte Entscheidungen im Einzelfall:</strong>
            Bonitätsauskunft (Entscheidung auf Grundlage einer Bonitätsprüfung).
          </li>
        </ul>
        <p>
          <strong>Eingesetzte Dienste und Diensteanbieter:</strong>
        </p>
        <ul>
          <li>
            <strong>Verband der Vereine Creditreform e.V.:</strong>
            Wirtschaftsauskunftei; Dienstanbieter: Verband der Vereine
            Creditreform e.V., Hellersbergstraße 12, D-41460 Neuss, Deutschland;
            Website:{" "}
            <a href="https://www.creditreform.de/">
              https://www.creditreform.de/
            </a>
            ; Datenschutzerklärung:{" "}
            <a href="https://www.creditreform.de/datenschutz">
              https://www.creditreform.de/datenschutz
            </a>
            .
          </li>
        </ul>
        <h4 className="pt-40 pb-1" id="m225">
          Bereitstellung des Onlineangebotes und Webhosting
        </h4>
        <p>
          Um unser Onlineangebot sicher und effizient bereitstellen zu können,
          nehmen wir die Leistungen von einem oder mehreren Webhosting-Anbietern
          in Anspruch, von deren Servern (bzw. von ihnen verwalteten Servern)
          das Onlineangebot abgerufen werden kann. Zu diesen Zwecken können wir
          Infrastruktur- und Plattformdienstleistungen, Rechenkapazität,
          Speicherplatz und Datenbankdienste sowie Sicherheitsleistungen und
          technische Wartungsleistungen in Anspruch nehmen.
        </p>
        <p>
          Zu den im Rahmen der Bereitstellung des Hostingangebotes verarbeiteten
          Daten können alle die Nutzer unseres Onlineangebotes betreffenden
          Angaben gehören, die im Rahmen der Nutzung und der Kommunikation
          anfallen. Hierzu gehören regelmäßig die IP-Adresse, die notwendig ist,
          um die Inhalte von Onlineangeboten an Browser ausliefern zu können,
          und alle innerhalb unseres Onlineangebotes oder von Webseiten
          getätigten Eingaben.
        </p>
        <p>
          <strong>E-Mail-Versand und -Hosting</strong>: Die von uns in Anspruch
          genommenen Webhosting-Leistungen umfassen ebenfalls den Versand, den
          Empfang sowie die Speicherung von E-Mails. Zu diesen Zwecken werden
          die Adressen der Empfänger sowie Absender als auch weitere
          Informationen betreffend den E-Mailversand (z.B. die beteiligten
          Provider) sowie die Inhalte der jeweiligen E-Mails verarbeitet. Die
          vorgenannten Daten können ferner zu Zwecken der Erkennung von SPAM
          verarbeitet werden. Wir bitten darum, zu beachten, dass E-Mails im
          Internet grundsätzlich nicht verschlüsselt versendet werden. Im
          Regelfall werden E-Mails zwar auf dem Transportweg verschlüsselt, aber
          (sofern kein sogenanntes Ende-zu-Ende-Verschlüsselungsverfahren
          eingesetzt wird) nicht auf den Servern, von denen sie abgesendet und
          empfangen werden. Wir können daher für den Übertragungsweg der E-Mails
          zwischen dem Absender und dem Empfang auf unserem Server keine
          Verantwortung übernehmen.
        </p>
        <p>
          <strong>Erhebung von Zugriffsdaten und Logfiles</strong>: Wir selbst
          (bzw. unser Webhostinganbieter) erheben Daten zu jedem Zugriff auf den
          Server (sogenannte Serverlogfiles). Zu den Serverlogfiles können die
          Adresse und Name der abgerufenen Webseiten und Dateien, Datum und
          Uhrzeit des Abrufs, übertragene Datenmengen, Meldung über
          erfolgreichen Abruf, Browsertyp nebst Version, das Betriebssystem des
          Nutzers, Referrer URL (die zuvor besuchte Seite) und im Regelfall
          IP-Adressen und der anfragende Provider gehören.
        </p>
        <p>
          Die Serverlogfiles können zum einen zu Zwecken der Sicherheit
          eingesetzt werden, z.B., um eine Überlastung der Server zu vermeiden
          (insbesondere im Fall von missbräuchlichen Angriffen, sogenannten
          DDoS-Attacken) und zum anderen, um die Auslastung der Server und ihre
          Stabilität sicherzustellen.
        </p>
        <ul>
          <li>
            <strong>Verarbeitete Datenarten:</strong>
            Inhaltsdaten (z.B. Eingaben in Onlineformularen), Nutzungsdaten
            (z.B. besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten),
            Meta-/Kommunikationsdaten (z.B. Geräte-Informationen, IP-Adressen).
          </li>
          <li>
            <strong>Betroffene Personen:</strong>
            Nutzer (z.B. Webseitenbesucher, Nutzer von Onlinediensten).
          </li>
          <li>
            <strong>Rechtsgrundlagen:</strong>
            Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO).
          </li>
        </ul>
        <h4 className="pt-40 pb-1" id="m182">
          Kontaktaufnahme
        </h4>
        <p>
          Bei der Kontaktaufnahme mit uns (z.B. per Kontaktformular, E-Mail,
          Telefon oder via soziale Medien) werden die Angaben der anfragenden
          Personen verarbeitet, soweit dies zur Beantwortung der Kontaktanfragen
          und etwaiger angefragter Maßnahmen erforderlich ist.
        </p>
        <p>
          Die Beantwortung der Kontaktanfragen im Rahmen von vertraglichen oder
          vorvertraglichen Beziehungen erfolgt zur Erfüllung unserer
          vertraglichen Pflichten oder zur Beantwortung von (vor)vertraglichen
          Anfragen und im Übrigen auf Grundlage der berechtigten Interessen an
          der Beantwortung der Anfragen.
        </p>
        <ul>
          <li>
            <strong>Verarbeitete Datenarten:</strong>
            Bestandsdaten (z.B. Namen, Adressen), Kontaktdaten (z.B. E-Mail,
            Telefonnummern), Inhaltsdaten (z.B. Eingaben in Onlineformularen),
            Nutzungsdaten (z.B. besuchte Webseiten, Interesse an Inhalten,
            Zugriffszeiten), Meta-/Kommunikationsdaten (z.B.
            Geräte-Informationen, IP-Adressen).
          </li>
          <li>
            <strong>Betroffene Personen:</strong>
            Kommunikationspartner, Interessenten.
          </li>
          <li>
            <strong>Zwecke der Verarbeitung:</strong>
            Kontaktanfragen und Kommunikation, Verwaltung und Beantwortung von
            Anfragen.
          </li>
          <li>
            <strong>Rechtsgrundlagen:</strong>
            Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1
            lit. b. DSGVO), Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f.
            DSGVO).
          </li>
        </ul>
        <p>
          <strong>Eingesetzte Dienste und Diensteanbieter:</strong>
        </p>
        <ul>
          <li>
            <strong>Help Scout:</strong>
            Management von Kontaktanfragen und Kommunikation; Dienstanbieter:
            Help Scout Inc., 131 Tremont St, Boston, MA 02111-1338, USA;
            Website:{" "}
            <a href="https://www.helpscout.net">https://www.helpscout.net</a>;
            Datenschutzerklärung:{" "}
            <a href="https://www.helpscout.net/company/legal/privacy/">
              https://www.helpscout.net/company/legal/privacy/
            </a>
            ; Standardvertragsklauseln (Gewährleistung Datenschutzniveau bei
            Verarbeitung in Drittländern):{" "}
            <a href="https://www.helpscout.com/company/legal/dpa/">
              https://www.helpscout.com/company/legal/dpa/
            </a>
            ; Auftragsverarbeitungsvertrag:{" "}
            <a href="https://www.helpscout.com/company/legal/dpa/">
              https://www.helpscout.com/company/legal/dpa/
            </a>
            .
          </li>
        </ul>
        <h4 className="pt-40 pb-1" id="m17">
          Newsletter und elektronische Benachrichtigungen
        </h4>
        <p>
          Wir versenden Newsletter, E-Mails und weitere elektronische
          Benachrichtigungen (nachfolgend &#8222;Newsletter“) nur mit der
          Einwilligung der Empfänger oder einer gesetzlichen Erlaubnis. Sofern
          im Rahmen einer Anmeldung zum Newsletter dessen Inhalte konkret
          umschrieben werden, sind sie für die Einwilligung der Nutzer
          maßgeblich. Im Übrigen enthalten unsere Newsletter Informationen zu
          unseren Leistungen und uns.
        </p>
        <p>
          Um sich zu unseren Newslettern anzumelden, reicht es grundsätzlich
          aus, wenn Sie Ihre E-Mail-Adresse angeben. Wir können Sie jedoch
          bitten, einen Namen, zwecks persönlicher Ansprache im Newsletter, oder
          weitere Angaben, sofern diese für die Zwecke des Newsletters
          erforderlich sind, zu tätigen.
        </p>
        <p>
          <strong>Double-Opt-In-Verfahren:</strong>
          Die Anmeldung zu unserem Newsletter erfolgt grundsätzlich in einem
          sogenannte Double-Opt-In-Verfahren. D.h., Sie erhalten nach der
          Anmeldung eine E-Mail, in der Sie um die Bestätigung Ihrer Anmeldung
          gebeten werden. Diese Bestätigung ist notwendig, damit sich niemand
          mit fremden E-Mail-Adressen anmelden kann. Die Anmeldungen zum
          Newsletter werden protokolliert, um den Anmeldeprozess entsprechend
          den rechtlichen Anforderungen nachweisen zu können. Hierzu gehört die
          Speicherung des Anmelde- und des Bestätigungszeitpunkts als auch der
          IP-Adresse. Ebenso werden die Änderungen Ihrer bei dem
          Versanddienstleister gespeicherten Daten protokolliert.
        </p>
        <p>
          <strong>Löschung und Einschränkung der Verarbeitung:</strong>
          Wir können die ausgetragenen E-Mail-Adressen bis zu drei Jahren auf
          Grundlage unserer berechtigten Interessen speichern, bevor wir sie
          löschen, um eine ehemals gegebene Einwilligung nachweisen zu können.
          Die Verarbeitung dieser Daten wird auf den Zweck einer möglichen
          Abwehr von Ansprüchen beschränkt. Ein individueller Löschungsantrag
          ist jederzeit möglich, sofern zugleich das ehemalige Bestehen einer
          Einwilligung bestätigt wird. Im Fall von Pflichten zur dauerhaften
          Beachtung von Widersprüchen behalten wir uns die Speicherung der
          E-Mail-Adresse alleine zu diesem Zweck in einer Sperrliste (sogenannte
          &#8222;Blacklist &#8220;) vor.
        </p>
        <p>
          Die Protokollierung des Anmeldeverfahrens erfolgt auf Grundlage
          unserer berechtigten Interessen zu Zwecken des Nachweises seines
          ordnungsgemäßen Ablaufs. Soweit wir einen Dienstleister mit dem
          Versand von E-Mails beauftragen, erfolgt dies auf Grundlage unserer
          berechtigten Interessen an einem effizienten und sicheren
          Versandsystem.
        </p>
        <p>
          <strong>Hinweise zu Rechtsgrundlagen:</strong>
          Der Versand der Newsletter erfolgt auf Grundlage einer Einwilligung
          der Empfänger oder, falls eine Einwilligung nicht erforderlich ist,
          auf Grundlage unserer berechtigten Interessen am Direktmarketing,
          sofern und soweit diese gesetzlich, z.B. im Fall von
          Bestandskundenwerbung, erlaubt ist. Soweit wir einen Dienstleister mit
          dem Versand von E-Mails beauftragen, geschieht dies auf der Grundlage
          unserer berechtigten Interessen. Das Registrierungsverfahren wird auf
          der Grundlage unserer berechtigten Interessen aufgezeichnet, um
          nachzuweisen, dass es in Übereinstimmung mit dem Gesetz durchgeführt
          wurde.
        </p>
        <p>
          <strong>Inhalte:</strong>
          Informationen zu uns, unseren Leistungen, Aktionen und Angeboten.
        </p>
        <p>
          <strong>Analyse und Erfolgsmessung</strong>: Die Newsletter enthalten
          einen sogenannte &#8222;web-beacon“, d.h., eine pixelgroße Datei, die
          beim Öffnen des Newsletters von unserem Server, bzw., sofern wir einen
          Versanddienstleister einsetzen, von dessen Server abgerufen wird. Im
          Rahmen dieses Abrufs werden zunächst technische Informationen, wie
          Informationen zum Browser und Ihrem System, als auch Ihre IP-Adresse
          und der Zeitpunkt des Abrufs, erhoben.
        </p>
        <p>
          Diese Informationen werden zur technischen Verbesserung unseres
          Newsletters anhand der technischen Daten oder der Zielgruppen und
          ihres Leseverhaltens auf Basis ihrer Abruforte (die mit Hilfe der
          IP-Adresse bestimmbar sind) oder der Zugriffszeiten genutzt. Diese
          Analyse beinhaltet ebenfalls die Feststellung, ob die Newsletter
          geöffnet werden, wann sie geöffnet werden und welche Links geklickt
          werden. Diese Informationen können aus technischen Gründen zwar den
          einzelnen Newsletterempfängern zugeordnet werden. Es ist jedoch weder
          unser Bestreben noch, sofern eingesetzt, das des
          Versanddienstleisters, einzelne Nutzer zu beobachten. Die Auswertungen
          dienen uns vielmehr dazu, die Lesegewohnheiten unserer Nutzer zu
          erkennen und unsere Inhalte an sie anzupassen oder unterschiedliche
          Inhalte entsprechend den Interessen unserer Nutzer zu versenden.
        </p>
        <p>
          Die Auswertung des Newsletters und die Erfolgsmessung erfolgen,
          vorbehaltlich einer ausdrücklichen Einwilligung der Nutzer, auf
          Grundlage unserer berechtigten Interessen zu Zwecken des Einsatzes
          eines nutzerfreundlichen sowie sicheren Newslettersystems, welches
          sowohl unseren geschäftlichen Interessen dient, als auch den
          Erwartungen der Nutzer entspricht.
        </p>
        <p>
          Ein getrennter Widerruf der Erfolgsmessung ist leider nicht möglich,
          in diesem Fall muss das gesamte Newsletterabonnement gekündigt, bzw.
          muss ihm widersprochen werden.
        </p>
        <ul>
          <li>
            <strong>Verarbeitete Datenarten:</strong>
            Bestandsdaten (z.B. Namen, Adressen), Kontaktdaten (z.B. E-Mail,
            Telefonnummern), Meta-/Kommunikationsdaten (z.B.
            Geräte-Informationen, IP-Adressen), Nutzungsdaten (z.B. besuchte
            Webseiten, Interesse an Inhalten, Zugriffszeiten).
          </li>
          <li>
            <strong>Betroffene Personen:</strong>
            Kommunikationspartner.
          </li>
          <li>
            <strong>Zwecke der Verarbeitung:</strong>
            Direktmarketing (z.B. per E-Mail oder postalisch).
          </li>
          <li>
            <strong>Rechtsgrundlagen:</strong>
            Einwilligung (Art. 6 Abs. 1 S. 1 lit. a. DSGVO), Berechtigte
            Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO).
          </li>
          <li>
            <strong>Widerspruchsmöglichkeit (Opt-Out):</strong>
            Sie können den Empfang unseres Newsletters jederzeit kündigen, d.h.
            Ihre Einwilligungen widerrufen, bzw. dem weiteren Empfang
            widersprechen. Einen Link zur Kündigung des Newsletters finden Sie
            entweder am Ende eines jeden Newsletters oder können sonst eine der
            oben angegebenen Kontaktmöglichkeiten, vorzugswürdig E-Mail, hierzu
            nutzen.
          </li>
        </ul>
        <p>
          <strong>Eingesetzte Dienste und Diensteanbieter:</strong>
        </p>
        <ul>
          <li>
            <strong>CleverReach:</strong>
            E-Mail-Marketing-Plattform;&nbsp;Dienstanbieter:&nbsp;CleverReach
            GmbH &amp;Co. KG, //CRASH Building, Schafjückenweg 2, 26180 Rastede,
            Deutschland;&nbsp;Website:&nbsp;
            <a
              href="https://www.cleverreach.com/de"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://www.cleverreach.com/de
            </a>
            ;&nbsp;Datenschutzerklärung:&nbsp;
            <a
              href="https://www.cleverreach.com/de/datenschutz/"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://www.cleverreach.com/de/datenschutz/
            </a>
            ;&nbsp;Auftragsverarbeitungsvertrag:&nbsp;Mit Anbieter
            abgeschlossen.
          </li>
          <li>
            <strong>Mailchimp: </strong>
            E-Mail-Versand- und E-Mail-Marketing-Plattform; Dienstanbieter:
            &#8222;Mailchimp &#8220;&#8211;Rocket Science Group, LLC, 675 Ponce
            De Leon Ave NE #5000, Atlanta, GA 30308, USA; Website:{" "}
            <a
              href="https://mailchimp.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://mailchimp.com
            </a>
            ; Datenschutzerklärung:{" "}
            <a
              href="https://mailchimp.com/legal/privacy/"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://mailchimp.com/legal/privacy/
            </a>
            ; Standardvertragsklauseln (Gewährleistung Datenschutzniveau bei
            Verarbeitung in Drittländern):{" "}
            <a
              href="https://mailchimp.com/legal/data-processing-addendum/"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://mailchimp.com/legal/data-processing-addendum/
            </a>
            ; Weitere Informationen: Besondere Sicherheitsmaßnahmen:{" "}
            <a
              href="https://mailchimp.com/help/Mailchimp-european-data-transfers/"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://mailchimp.com/help/Mailchimp-european-data-transfers/
            </a>
            .
          </li>
        </ul>
        <h4 className="pt-40 pb-1" id="m263">
          Webanalyse, Monitoring und Optimierung
        </h4>
        <p>
          Die Webanalyse (auch als &#8222;Reichweitenmessung &#8220;bezeichnet)
          dient der Auswertung der Besucherströme unseres Onlineangebotes und
          kann Verhalten, Interessen oder demographische Informationen zu den
          Besuchern, wie z.B. das Alter oder das Geschlecht, als pseudonyme
          Werte umfassen. Mit Hilfe der Reichweitenanalyse können wir z.B.
          erkennen, zu welcher Zeit unser Onlineangebot oder dessen Funktionen
          oder Inhalte am häufigsten genutzt werden oder zur Wiederverwendung
          einladen. Ebenso können wir nachvollziehen, welche Bereiche der
          Optimierung bedürfen.
        </p>
        <p>
          Neben der Webanalyse können wir auch Testverfahren einsetzen, um z.B.
          unterschiedliche Versionen unseres Onlineangebotes oder seiner
          Bestandteile zu testen und optimieren.
        </p>
        <p>
          Zu diesen Zwecken können sogenannte Nutzerprofile angelegt und in
          einer Datei (sogenannte &#8222;Cookie &#8220;) gespeichert oder
          ähnliche Verfahren mit dem gleichen Zweck genutzt werden. Zu diesen
          Angaben können z.B. betrachtete Inhalte, besuchte Webseiten und dort
          genutzte Elemente und technische Angaben, wie der verwendete Browser,
          das verwendete Computersystem sowie Angaben zu Nutzungszeiten gehören.
          Sofern Nutzer in die Erhebung ihrer Standortdaten eingewilligt haben,
          können je nach Anbieter auch diese verarbeitet werden.
        </p>
        <p>
          Es werden ebenfalls die IP-Adressen der Nutzer gespeichert. Jedoch
          nutzen wir ein IP-Masking-Verfahren (d.h., Pseudonymisierung durch
          Kürzung der IP-Adresse) zum Schutz der Nutzer. Generell werden die im
          Rahmen von Webanalyse, A/B-Testings und Optimierung keine Klardaten
          der Nutzer (wie z.B. E-Mail-Adressen oder Namen) gespeichert, sondern
          Pseudonyme. D.h., wir als auch die Anbieter der eingesetzten Software
          kennen nicht die tatsächliche Identität der Nutzer, sondern nur den
          für Zwecke der jeweiligen Verfahren in deren Profilen gespeicherten
          Angaben.
        </p>
        <p>
          <strong>Hinweise zu Rechtsgrundlagen:</strong>
          Sofern wir die Nutzer um deren Einwilligung in den Einsatz der
          Drittanbieter bitten, ist die Rechtsgrundlage der Verarbeitung von
          Daten die Einwilligung. Ansonsten werden die Daten der Nutzer auf
          Grundlage unserer berechtigten Interessen (d.h. Interesse an
          effizienten, wirtschaftlichen und empfängerfreundlichen Leistungen)
          verarbeitet. In diesem Zusammenhang möchten wir Sie auch auf die
          Informationen zur Verwendung von Cookies in dieser
          Datenschutzerklärung hinweisen.
        </p>
        <ul>
          <li>
            <strong>Verarbeitete Datenarten:</strong>
            Nutzungsdaten (z.B. besuchte Webseiten, Interesse an Inhalten,
            Zugriffszeiten), Meta-/Kommunikationsdaten (z.B.
            Geräte-Informationen, IP-Adressen).
          </li>
          <li>
            <strong>Betroffene Personen:</strong>
            Nutzer (z.B. Webseitenbesucher, Nutzer von Onlinediensten).
          </li>
          <li>
            <strong>Zwecke der Verarbeitung:</strong>
            Reichweitenmessung (z.B. Zugriffsstatistiken, Erkennung
            wiederkehrender Besucher), Tracking (z.B.
            interessens-/verhaltensbezogenes Profiling, Nutzung von Cookies),
            Besuchsaktionsauswertung, Profiling (Erstellen von Nutzerprofilen).
          </li>
          <li>
            <strong>Sicherheitsmaßnahmen:</strong>
            IP-Masking (Pseudonymisierung der IP-Adresse).
          </li>
          <li>
            <strong>Rechtsgrundlagen:</strong>
            Einwilligung (Art. 6 Abs. 1 S. 1 lit. a. DSGVO), Berechtigte
            Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO).
          </li>
        </ul>
        <p>
          <strong>Eingesetzte Dienste und Diensteanbieter:</strong>
        </p>
        <ul>
          <li>
            <strong>etracker:</strong>
            Webanalyse/ Reichweitenmessung;&nbsp;Dienstanbieter:&nbsp;etracker
            GmbH, Erste Brunnenstraße 1 20459 Hamburg,
            Deutschland;&nbsp;Website:&nbsp;
            <a
              href="https://www.etracker.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://www.etracker.com
            </a>
            ;&nbsp;Datenschutzerklärung:&nbsp;
            <a
              href="https://www.etracker.com/datenschutz/"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://www.etracker.com/datenschutz/
            </a>
            ;&nbsp;Auftragsverarbeitungsvertrag:&nbsp;
            <a
              href="https://www.etracker.com/av-vertrag/"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://www.etracker.com/av-vertrag/
            </a>
            .; Widerspruchsmöglichkeit (Opt-Out):{" "}
            <a href="https://www.etracker.de/privacy?et=[BITTE-EINSETZEN-IHRE-Account-ID][BITTE-EINSETZEN-IHRE-Account-ID]">
              https://www.etracker.de/privacy?et=
            </a>
            [BITTE-EINSETZEN-IHRE-Account-ID].
          </li>
          <li>
            <strong>Matomo (ohne Cookies):</strong>
            Bei Matomo handelt es sich um eine datenschutzfreundliche
            Webanalysesoftware, die ohne Cookies eingesetzt wird und bei der die
            Erkennnung wiederkehrender Nutzer mit Hilfe eines so genannten
            &#8222;digitalen Fingerabdrucks &#8220;erfolgt, der anonymisiert
            gespeichert und alle 24 Stunden geändert wird; Beim &#8222;digitalen
            Fingerabdruck &#8220;werden Nutzerbewegungen innerhalb unseres
            Onlineangebotes mit Hilfe von pseudonymisierten IP-Adressen in
            Kombination mit nutzerseitige Browsereinstellungen so erfasst, dass
            Rückschlüsse auf die Identität einzelner Nutzer nicht möglich sind.
            Die im Rahmen der Nutzung von Matomo erhobenen Daten der Nutzer
            werden nur von uns verarbeitet und nicht mit Dritten geteilt.
          </li>
        </ul>
        <h4 className="pt-40 pb-1" id="m264">
          Onlinemarketing
        </h4>
        <p>
          Wir verarbeiten personenbezogene Daten zu Zwecken des
          Onlinemarketings, worunter insbesondere die Vermarktung von
          Werbeflächen oder Darstellung von werbenden und sonstigen Inhalten
          (zusammenfassend als &#8222;Inhalte &#8220;bezeichnet) anhand
          potentieller Interessen der Nutzer sowie die Messung ihrer
          Effektivität fallen kann.
        </p>
        <p>
          Zu diesen Zwecken werden sogenannte Nutzerprofile angelegt und in
          einer Datei (sogenannte &#8222;Cookie &#8220;) gespeichert oder
          ähnliche Verfahren genutzt, mittels derer die für die Darstellung der
          vorgenannten Inhalte relevante Angaben zum Nutzer gespeichert werden.
          Zu diesen Angaben können z.B. betrachtete Inhalte, besuchte Webseiten,
          genutzte Onlinenetzwerke, aber auch Kommunikationspartner und
          technische Angaben, wie der verwendete Browser, das verwendete
          Computersystem sowie Angaben zu Nutzungszeiten gehören. Sofern Nutzer
          in die Erhebung ihrer Standortdaten eingewilligt haben, können auch
          diese verarbeitet werden.
        </p>
        <p>
          Es werden ebenfalls die IP-Adressen der Nutzer gespeichert. Jedoch
          nutzen wir zur Verfügung stehende IP-Masking-Verfahren (d.h.,
          Pseudonymisierung durch Kürzung der IP-Adresse) zum Schutz der Nutzer.
          Generell werden im Rahmen des Onlinemarketingverfahren keine Klardaten
          der Nutzer (wie z.B. E-Mail-Adressen oder Namen) gespeichert, sondern
          Pseudonyme. D.h., wir als auch die Anbieter der
          Onlinemarketingverfahren kennen nicht die tatsächlich Identität der
          Nutzer, sondern nur die in deren Profilen gespeicherten Angaben.
        </p>
        <p>
          Die Angaben in den Profilen werden im Regelfall in den Cookies oder
          mittels ähnlicher Verfahren gespeichert. Diese Cookies können später
          generell auch auf anderen Webseiten die dasselbe
          Onlinemarketingverfahren einsetzen, ausgelesen und zu Zwecken der
          Darstellung von Inhalten analysiert als auch mit weiteren Daten
          ergänzt und auf dem Server des Onlinemarketingverfahrensanbieters
          gespeichert werden.
        </p>
        <p>
          Ausnahmsweise können Klardaten den Profilen zugeordnet werden. Das ist
          der Fall, wenn die Nutzer z.B. Mitglieder eines sozialen Netzwerks
          sind, dessen Onlinemarketingverfahren wir einsetzen und das Netzwerk
          die Profile der Nutzer mit den vorgenannten Angaben verbindet. Wir
          bitten darum, zu beachten, dass Nutzer mit den Anbietern zusätzliche
          Abreden, z.B. durch Einwilligung im Rahmen der Registrierung, treffen
          können.
        </p>
        <p>
          Wir erhalten grundsätzlich nur Zugang zu zusammengefassten
          Informationen über den Erfolg unserer Werbeanzeigen. Jedoch können wir
          im Rahmen sogenannter Konversionsmessungen prüfen, welche unserer
          Onlinemarketingverfahren zu einer sogenannten Konversion geführt
          haben, d.h. z.B., zu einem Vertragsschluss mit uns. Die
          Konversionsmessung wird alleine zur Analyse des Erfolgs unserer
          Marketingmaßnahmen verwendet.
        </p>
        <p>
          Solange nicht anders angegeben, bitten wir Sie davon auszugehen, dass
          verwendete Cookies für einen Zeitraum von zwei Jahren gespeichert
          werden.
        </p>
        <p>
          <strong>Hinweise zu Rechtsgrundlagen:</strong>
          Sofern wir die Nutzer um deren Einwilligung in den Einsatz der
          Drittanbieter bitten, ist die Rechtsgrundlage der Verarbeitung von
          Daten die Einwilligung. Ansonsten werden die Daten der Nutzer auf
          Grundlage unserer berechtigten Interessen (d.h. Interesse an
          effizienten, wirtschaftlichen und empfängerfreundlichen Leistungen)
          verarbeitet. In diesem Zusammenhang möchten wir Sie auch auf die
          Informationen zur Verwendung von Cookies in dieser
          Datenschutzerklärung hinweisen.
        </p>
        <ul>
          <li>
            <strong>Verarbeitete Datenarten:</strong>
            Nutzungsdaten (z.B. besuchte Webseiten, Interesse an Inhalten,
            Zugriffszeiten), Meta-/Kommunikationsdaten (z.B.
            Geräte-Informationen, IP-Adressen), Standortdaten (Angaben zur
            geografischen Position eines Gerätes oder einer Person).
          </li>
          <li>
            <strong>Betroffene Personen:</strong>
            Nutzer (z.B. Webseitenbesucher, Nutzer von Onlinediensten),
            Interessenten.
          </li>
          <li>
            <strong>Zwecke der Verarbeitung:</strong>
            Tracking (z.B. interessens-/verhaltensbezogenes Profiling, Nutzung
            von Cookies), Remarketing, Besuchsaktionsauswertung,
            Interessenbasiertes und verhaltensbezogenes Marketing, Profiling
            (Erstellen von Nutzerprofilen), Konversionsmessung (Messung der
            Effektivität von Marketingmaßnahmen), Reichweitenmessung (z.B.
            Zugriffsstatistiken, Erkennung wiederkehrender Besucher),
            Zielgruppenbildung (Bestimmung von für Marketingzwecke relevanten
            Zielgruppen oder sonstige Ausgabe von Inhalten), Cross-Device
            Tracking (geräteübergreifende Verarbeitung von Nutzerdaten für
            Marketingzwecke).
          </li>
          <li>
            <strong>Sicherheitsmaßnahmen:</strong>
            IP-Masking (Pseudonymisierung der IP-Adresse).
          </li>
          <li>
            <strong>Rechtsgrundlagen:</strong>
            Einwilligung (Art. 6 Abs. 1 S. 1 lit. a. DSGVO), Berechtigte
            Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO).
          </li>
          <li>
            <strong>Widerspruchsmöglichkeit (Opt-Out):</strong>
            <b /> Wir verweisen auf die Datenschutzhinweise der jeweiligen
            Anbieter und die zu den Anbietern angegebenen
            Widerspruchsmöglichkeiten (sog. &#8222;Opt-Out &#8220;). Sofern
            keine explizite Opt-Out-Möglichkeit angegeben wurde, besteht zum
            einen die Möglichkeit, dass Sie Cookies in den Einstellungen Ihres
            Browsers abschalten. Hierdurch können jedoch Funktionen unseres
            Onlineangebotes eingeschränkt werden. Wir empfehlen daher zusätzlich
            die folgenden Opt-Out-Möglichkeiten, die zusammenfassend auf
            jeweilige Gebiete gerichtet angeboten werden:a) Europa:{" "}
            <a href="https://www.youronlinechoices.eu">
              https://www.youronlinechoices.eu
            </a>
            .
            <b /> b) Kanada:{" "}
            <a href="https://www.youradchoices.ca/choices">
              https://www.youradchoices.ca/choices
            </a>
            .
            <b /> c) USA:{" "}
            <a href="https://www.aboutads.info/choices">
              https://www.aboutads.info/choices
            </a>
            .
            <b /> d) Gebietsübergreifend:{" "}
            <a href="https://optout.aboutads.info">
              https://optout.aboutads.info
            </a>
            .
          </li>
        </ul>
        <p>
          <strong>Eingesetzte Dienste und Diensteanbieter:</strong>
        </p>
        <ul>
          <li>
            <strong>Google Tag Manager:</strong>
            Google Tag Manager ist eine Lösung, mit der wir sog. Website-Tags
            über eine Oberfläche verwalten und so andere Dienste in unser
            Onlineangebot einbinden können (hierzu wird auf weitere Angaben in
            dieser Datenschutzerklärung verwiesen). Mit dem Tag Manager selbst
            (welches die Tags implementiert) werden daher z. B. noch keine
            Profile der Nutzer erstellt oder Cookies gespeichert. Google erfährt
            lediglich die IP-Adresse des Nutzers, was notwendig ist, um den
            Google Tag Manager auszuführen;&nbsp;Dienstanbieter:&nbsp;Google
            Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland,
            Mutterunternehmen: Google LLC, 1600 Amphitheatre Parkway, Mountain
            View, CA 94043, USA;&nbsp;Website:&nbsp;
            <a
              href="https://marketingplatform.google.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://marketingplatform.google.com
            </a>
            ;&nbsp;Datenschutzerklärung:&nbsp;
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://policies.google.com/privacy
            </a>
            ;&nbsp;Auftragsverarbeitungsvertrag:&nbsp;
            <a
              href="https://business.safety.google/adsprocessorterms"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://business.safety.google/adsprocessorterms
            </a>
            ;&nbsp;Weitere Informationen:&nbsp;Arten der Verarbeitung sowie der
            verarbeiteten Daten:&nbsp;
            <a
              href="https://privacy.google.com/businesses/adsservices"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://privacy.google.com/businesses/adsservices
            </a>
            ; Datenverarbeitungsbedingungen für Google Werbeprodukte und
            Standardvertragsklauseln für Drittlandtransfers von Daten:&nbsp;
            <a
              href="https://business.safety.google/adsprocessorterms"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://business.safety.google/adsprocessorterms
            </a>
            .
          </li>
          <li>
            <strong>Google Analytics:</strong>
            Reichweitenmessung und Webanalyse;&nbsp;Dienstanbieter:&nbsp;Google
            Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland,
            Mutterunternehmen: Google LLC, 1600 Amphitheatre Parkway, Mountain
            View, CA 94043, USA;&nbsp;Website:&nbsp;
            <a
              href="https://marketingplatform.google.com/intl/de/about/analytics/"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://marketingplatform.google.com/intl/de/about/analytics/
            </a>
            ;&nbsp;Datenschutzerklärung:&nbsp;
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://policies.google.com/privacy
            </a>
            ;&nbsp;Widerspruchsmöglichkeit (Opt-Out):&nbsp;Opt-Out-Plugin:&nbsp;
            <a
              href="https://tools.google.com/dlpage/gaoptout?hl=de"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://tools.google.com/dlpage/gaoptout?hl=de
            </a>
            , Einstellungen für die Darstellung von Werbeeinblendungen:&nbsp;
            <a
              href="https://adssettings.google.com/authenticated"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://adssettings.google.com/authenticated
            </a>
            ;&nbsp;Auftragsverarbeitungsvertrag:&nbsp;
            <a
              href="https://business.safety.google/adsprocessorterms/"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://business.safety.google/adsprocessorterms/
            </a>
            ;&nbsp;Weitere Informationen:&nbsp;Arten der Verarbeitung sowie der
            verarbeiteten Daten:&nbsp;
            <a
              href="https://privacy.google.com/businesses/adsservices"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://privacy.google.com/businesses/adsservices
            </a>
            ; Datenverarbeitungsbedingungen für Google Werbeprodukte und
            Standardvertragsklauseln für Drittlandtransfers von Daten:&nbsp;
            <a
              href="https://business.safety.google/adsprocessorterms"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://business.safety.google/adsprocessorterms
            </a>
            .
          </li>
          <li>
            <strong>Google Ads und Konversionsmessung: </strong>
            Wir nutzen das Onlinemarketingverfahren &#8222;Google Ads &#8220;,
            um Anzeigen im Google-Werbe-Netzwerk zu platzieren (z.B., in
            Suchergebnissen, in Videos, auf Webseiten, etc.), damit sie Nutzern
            angezeigt werden, die ein mutmaßliches Interesse an den Anzeigen
            haben. Ferner messen wir die Konversion der Anzeigen. Wir erfahren
            jedoch nur die anonyme Gesamtanzahl der Nutzer, die auf unsere
            Anzeige geklickt haben und zu einer mit einem sog
            &#8222;Conversion-Tracking-Tag &#8220;versehenen Seite
            weitergeleitet wurden. Wir selbst erhalten jedoch keine
            Informationen, mit denen sich Nutzer identifizieren
            lassen;&nbsp;Dienstanbieter:&nbsp;Google Ireland Limited, Gordon
            House, Barrow Street, Dublin 4, Ireland, parent company: Google LLC,
            1600 Amphitheatre Parkway, Mountain View, CA 94043,
            USA;&nbsp;Website:
            <a
              href="https://marketingplatform.google.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://marketingplatform.google.com
            </a>
            ;&nbsp;Datenschutzerklärung:
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://policies.google.com/privacy
            </a>
            ;&nbsp;Weitere Informationen:&nbsp;Arten der Verarbeitung sowie der
            verarbeiteten Daten:&nbsp;
            <a
              href="https://privacy.google.com/businesses/adsservices"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://privacy.google.com/businesses/adsservices
            </a>
            ; Datenverarbeitungsbedingungen für Google Werbeprodukte:
            Informationen zu den Diensten Datenverarbeitungsbedingungen zwischen
            Verantwortlichen und Standardvertragsklauseln für Drittlandtransfers
            von Daten:&nbsp;
            <a
              href="https://business.safety.google/adscontrollerterms"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://business.safety.google/adscontrollerterms
            </a>
            .
          </li>
          <li>
            <strong>Google Ad Manager:</strong>
            Wir nutzen die &#8222;Google Marketing Platform &#8220;(und Dienste
            wie z.B. &#8222;Google Ad Manager &#8220;), um Anzeigen im
            Google-Werbe-Netzwerk zu platzieren (z.B., in Suchergebnissen, in
            Videos, auf Webseiten, etc.). Die Google Marketing Platform zeichnet
            sich dadurch aus, dass Anzeigen in Echtzeit anhand mutmaßlicher
            Interessen der Nutzer angezeigt werden. Dies erlaubt uns Anzeigen
            für und innerhalb unseres Onlineangebotes gezielter anzuzeigen, um
            Nutzern nur Anzeigen zu präsentieren, die potentiell deren
            Interessen entsprechen. Falls einem Nutzer z.B. Anzeigen für
            Produkte angezeigt werden, für die er sich auf anderen
            Onlineangeboten interessiert hat, spricht man hierbei vom
            &#8222;Remarketing“;&nbsp;Dienstanbieter:&nbsp;Google Ireland
            Limited, Gordon House, Barrow Street, Dublin 4, Ireland, parent
            company: Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA
            94043, USA;&nbsp;Website:&nbsp;
            <a
              href="https://marketingplatform.google.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://marketingplatform.google.com
            </a>
            ;&nbsp;Datenschutzerklärung:&nbsp;
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://policies.google.com/privacy
            </a>
            ;&nbsp;Weitere Informationen:&nbsp;Arten der Verarbeitung sowie der
            verarbeiteten Daten:&nbsp;
            <a
              href="https://privacy.google.com/businesses/adsservices"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://privacy.google.com/businesses/adsservices
            </a>
            ; Datenverarbeitungsbedingungen für Google Werbeprodukte:
            Informationen zu den Diensten Datenverarbeitungsbedingungen zwischen
            Verantwortlichen und Standardvertragsklauseln für Drittlandtransfers
            von Daten:&nbsp;
            <a
              href="https://business.safety.google/adscontrollerterms"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://business.safety.google/adscontrollerterms
            </a>
            ; sofern Google als Auftragsverarbeiter fungiert,
            Datenverarbeitungsbedingungen für Google Werbeprodukte und
            Standardvertragsklauseln für Drittlandtransfers von Daten:&nbsp;
            <a
              href="https://business.safety.google/adsprocessorterms"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://business.safety.google/adsprocessorterms
            </a>
            .
          </li>
          <li>
            <strong>
              Facebook-Pixel und Zielgruppenbildung (Custom Audiences):&nbsp;
            </strong>
            Mit Hilfe des Facebook-Pixels (oder vergleichbarer Funktionen, zur
            Übermittlung von Event-Daten oder Kontaktinformationen mittels von
            Schnittstellen in Apps) ist es Facebook zum einen möglich, die
            Besucher unseres Onlineangebotes als Zielgruppe für die Darstellung
            von Anzeigen (sogenannte &#8222;Facebook-Ads &#8220;) zu bestimmen.
            Dementsprechend setzen wir das Facebook-Pixel ein, um die durch uns
            geschalteten Facebook-Ads nur solchen Nutzern bei Facebook und
            innerhalb der Dienste der mit Facebook kooperierenden Partner (so
            genanntes &#8222;Audience Network &#8220;&nbsp;
            <a
              href="https://www.facebook.com/audiencenetwork/"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://www.facebook.com/audiencenetwork/
            </a>
            &nbsp;) anzuzeigen, die auch ein Interesse an unserem Onlineangebot
            gezeigt haben oder die bestimmte Merkmale (z.B. Interesse an
            bestimmten Themen oder Produkten, die anhand der besuchten Webseiten
            ersichtlich werden) aufweisen, die wir an Facebook übermitteln
            (sogenannte &#8222;Custom Audiences“). Mit Hilfe des Facebook-Pixels
            möchten wir auch sicherstellen, dass unsere Facebook-Ads dem
            potentiellen Interesse der Nutzer entsprechen und nicht belästigend
            wirken. Mit Hilfe des Facebook-Pixels können wir ferner die
            Wirksamkeit der Facebook-Werbeanzeigen für statistische und
            Marktforschungszwecke nachvollziehen, indem wir sehen, ob Nutzer
            nach dem Klick auf eine Facebook-Werbeanzeige auf unsere Webseite
            weitergeleitet wurden (sogenannte
            &#8222;Konversionsmessung“);&nbsp;Dienstanbieter:&nbsp;Facebook
            Ireland Ltd., 4 Grand Canal Square, Grand Canal Harbour, Dublin 2,
            Irland;&nbsp;Website:&nbsp;https://www.facebook.com;&nbsp;Datenschutzerklärung:&nbsp;https://www.facebook.com/about/privacy;&nbsp;Standardvertragsklauseln
            (Gewährleistung Datenschutzniveau bei Verarbeitung in
            Drittländern):&nbsp;Es gilt der
            &#8222;Facebook-EU-Datenübermittlungszusatz
            &#8220;(https://www.facebook.com/legal/EU_data_transfer_addendum) im
            Fall der Auftragsverarbeitung durch Facebook als Grundlage der
            Verarbeitung von Event-Daten von EU-Bürgern in den USA und die
            Einbeziehung in den &#8222;Plattform-Nutzungsbedingungen von
            Facebook &#8220;(https://developers.facebook.com/terms) im Hinblick
            auf die eigenverantwortliche Verarbeitung von Eventdaten von
            Facebook im Rahmen der Anzeigenschaltung;&nbsp;Weitere
            Informationen: Es gelten die &#8222;Datenverarbeitungsbedingungen
            &#8220;(https://www.facebook.com/legal/terms/dataprocessing/update)
            im Hinblick auf Eventdaten, die Facebook im Auftrag verarbeitet, um
            Unternehmen Berichte und Analysen bereitzustellen; Ferner gilt der
            &#8222;Zusatz für Verantwortliche &#8220;als Vereinbarung über
            gemeinsame Verantwortlichkeit (Art. 26 Abs. 1 S. 3 DSGVO), die im
            Fall der eigenverantwortlichen Verarbeitung von Event-Daten durch
            Facebook zu Zwecken des Targetings sowie Verbesserung und Sicherung
            der Facebook-Produkte, maßgeblich ist.
          </li>
        </ul>
        <h4 className="pt-40 pb-1" id="m136">
          Präsenzen in sozialen Netzwerken (Social Media)
        </h4>
        <p>
          Wir unterhalten Onlinepräsenzen innerhalb sozialer Netzwerke und
          verarbeiten in diesem Rahmen Daten der Nutzer, um mit den dort aktiven
          Nutzern zu kommunizieren oder um Informationen über uns anzubieten.
        </p>
        <p>
          Wir weisen darauf hin, dass dabei Daten der Nutzer außerhalb des
          Raumes der Europäischen Union verarbeitet werden können. Hierdurch
          können sich für die Nutzer Risiken ergeben, weil so z.B. die
          Durchsetzung der Rechte der Nutzer erschwert werden könnte.
        </p>
        <p>
          Ferner werden die Daten der Nutzer innerhalb sozialer Netzwerke im
          Regelfall für Marktforschungs- und Werbezwecke verarbeitet. So können
          z.B. anhand des Nutzungsverhaltens und sich daraus ergebender
          Interessen der Nutzer Nutzungsprofile erstellt werden. Die
          Nutzungsprofile können wiederum verwendet werden, um z.B.
          Werbeanzeigen innerhalb und außerhalb der Netzwerke zu schalten, die
          mutmaßlich den Interessen der Nutzer entsprechen. Zu diesen Zwecken
          werden im Regelfall Cookies auf den Rechnern der Nutzer gespeichert,
          in denen das Nutzungsverhalten und die Interessen der Nutzer
          gespeichert werden. Ferner können in den Nutzungsprofilen auch Daten
          unabhängig der von den Nutzern verwendeten Geräte gespeichert werden
          (insbesondere, wenn die Nutzer Mitglieder der jeweiligen Plattformen
          sind und bei diesen eingeloggt sind).
        </p>
        <p>
          Für eine detaillierte Darstellung der jeweiligen Verarbeitungsformen
          und der Widerspruchsmöglichkeiten (Opt-Out) verweisen wir auf die
          Datenschutzerklärungen und Angaben der Betreiber der jeweiligen
          Netzwerke.
        </p>
        <p>
          Auch im Fall von Auskunftsanfragen und der Geltendmachung von
          Betroffenenrechten weisen wir darauf hin, dass diese am effektivsten
          bei den Anbietern geltend gemacht werden können. Nur die Anbieter
          haben jeweils Zugriff auf die Daten der Nutzer und können direkt
          entsprechende Maßnahmen ergreifen und Auskünfte geben. Sollten Sie
          dennoch Hilfe benötigen, dann können Sie sich an uns wenden.
        </p>
        <ul>
          <li>
            <strong>Verarbeitete Datenarten:</strong>
            Bestandsdaten (z.B. Namen, Adressen), Kontaktdaten (z.B. E-Mail,
            Telefonnummern), Inhaltsdaten (z.B. Eingaben in Onlineformularen),
            Nutzungsdaten (z.B. besuchte Webseiten, Interesse an Inhalten,
            Zugriffszeiten), Meta-/Kommunikationsdaten (z.B.
            Geräte-Informationen, IP-Adressen).
          </li>
          <li>
            <strong>Betroffene Personen:</strong>
            Nutzer (z.B. Webseitenbesucher, Nutzer von Onlinediensten).
          </li>
          <li>
            <strong>Zwecke der Verarbeitung:</strong>
            Kontaktanfragen und Kommunikation, Tracking (z.B.
            interessens-/verhaltensbezogenes Profiling, Nutzung von Cookies),
            Remarketing, Reichweitenmessung (z.B. Zugriffsstatistiken, Erkennung
            wiederkehrender Besucher).
          </li>
          <li>
            <strong>Rechtsgrundlagen:</strong>
            Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO).
          </li>
        </ul>
        <p>
          <strong>Eingesetzte Dienste und Diensteanbieter:</strong>
        </p>
        <ul>
          <li>
            <strong>Instagram:&nbsp;</strong>
            Soziales Netzwerk;&nbsp;Dienstanbieter:&nbsp;Instagram Inc., 1601
            Willow Road, Menlo Park, CA, 94025, USA;&nbsp;Website:&nbsp;
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://www.instagram.com
            </a>
            ;&nbsp;Datenschutzerklärung:&nbsp;
            <a
              href="https://instagram.com/about/legal/privacy"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://instagram.com/about/legal/privacy
            </a>
            .
          </li>
          <li>
            <strong>Facebook-Seiten:&nbsp;</strong>
            Profile innerhalb des sozialen Netzwerks Facebook &#8211;Wir sind
            gemeinsam mit Facebook Irland Ltd. für die Erhebung (jedoch nicht
            die weitere Verarbeitung) von Daten der Besucher unserer
            Facebook-Seite (sog. &#8222;Fanpage &#8220;) verantwortlich. Zu
            diesen Daten gehören Informationen zu den Arten von Inhalten, die
            Nutzer sich ansehen oder mit denen sie interagieren, oder die von
            ihnen vorgenommenen Handlungen (siehe unter „Von dir und anderen
            getätigte und bereitgestellte Dinge“ in der
            Facebook-Datenrichtlinie:&nbsp;
            <a
              href="https://www.facebook.com/policy"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://www.facebook.com/policy
            </a>
            ), sowie Informationen über die von den Nutzern genutzten Geräte (z.
            B. IP-Adressen, Betriebssystem, Browsertyp, Spracheinstellungen,
            Cookie-Daten; siehe unter „Geräteinformationen“ in der
            Facebook-Datenrichtlinie:&nbsp;
            <a
              href="https://www.facebook.com/policy"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://www.facebook.com/policy
            </a>
            ). Wie in der Facebook-Datenrichtlinie unter „Wie verwenden wir
            diese Informationen?“ erläutert, erhebt und verwendet Facebook
            Informationen auch, um Analysedienste, so genannte
            &#8222;Seiten-Insights &#8220;, für Seitenbetreiber bereitzustellen,
            damit diese Erkenntnisse darüber erhalten, wie Personen mit ihren
            Seiten und mit den mit ihnen verbundenen Inhalten interagieren. Wir
            haben mit Facebook eine spezielle Vereinbarung abgeschlossen
            (&#8222;Informationen zu Seiten-Insights &#8220;,&nbsp;
            <a
              href="https://www.facebook.com/legal/terms/page_controller_addendum"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://www.facebook.com/legal/terms/page_controller_addendum
            </a>
            ), in der insbesondere geregelt wird, welche Sicherheitsmaßnahmen
            Facebook beachten muss und in der Facebook sich bereit erklärt hat
            die Betroffenenrechte zu erfüllen (d. h. Nutzer können z. B.
            Auskünfte oder Löschungsanfragen direkt an Facebook richten). Die
            Rechte der Nutzer (insbesondere auf Auskunft, Löschung, Widerspruch
            und Beschwerde bei zuständiger Aufsichtsbehörde), werden durch die
            Vereinbarungen mit Facebook nicht eingeschränkt. Weitere Hinweise
            finden sich in den &#8222;Informationen zu Seiten-Insights &#8220;(
            <a
              href="https://www.facebook.com/legal/terms/information_about_page_insights_data"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://www.facebook.com/legal/terms/information_about_page_insights_data
            </a>
            );&nbsp;Dienstanbieter:&nbsp;Facebook Ireland Ltd., 4 Grand Canal
            Square, Grand Canal Harbour, Dublin 2,
            Irland;&nbsp;Website:&nbsp;https://www.facebook.com;&nbsp;Datenschutzerklärung:&nbsp;https://www.facebook.com/about/privacy;&nbsp;Standardvertragsklauseln
            (Gewährleistung Datenschutzniveau bei Verarbeitung in
            Drittländern):&nbsp;https://www.facebook.com/legal/EU_data_transfer_addendum;&nbsp;Weitere
            Informationen:&nbsp;Vereinbarung gemeinsamer Verantwortlichkeit:
            https://www.facebook.com/legal/terms/information_about_page_insights_data.
          </li>
          <li>
            <strong>LinkedIn:&nbsp;</strong>
            Soziales Netzwerk;&nbsp;Dienstanbieter:&nbsp;LinkedIn Ireland
            Unlimited Company, Wilton Place, Dublin 2,
            Irland;&nbsp;Website:&nbsp;
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://www.linkedin.com
            </a>
            ;&nbsp;Datenschutzerklärung:&nbsp;
            <a
              href="https://www.linkedin.com/legal/privacy-policy"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://www.linkedin.com/legal/privacy-policy
            </a>
            ;&nbsp;Standardvertragsklauseln (Gewährleistung Datenschutzniveau
            bei Verarbeitung in Drittländern):&nbsp;
            <a
              href="https://legal.linkedin.com/dpa"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://legal.linkedin.com/dpa
            </a>
            ;&nbsp;Widerspruchsmöglichkeit (Opt-Out):&nbsp;
            <a
              href="https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out
            </a>
            ;&nbsp;Auftragsverarbeitungsvertrag:&nbsp;
            <a
              href="https://legal.linkedin.com/dpa"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://legal.linkedin.com/dpa
            </a>
            .
          </li>
          <li>
            <strong>Twitter:&nbsp;</strong>
            Soziales Netzwerk;&nbsp;Dienstanbieter:&nbsp;Twitter International
            Company, One Cumberland Place, Fenian Street, Dublin 2 D02 AX07,
            Irland, Mutterunternehmen: Twitter Inc., 1355 Market Street, Suite
            900, San Francisco, CA 94103, USA;&nbsp;Datenschutzerklärung:&nbsp;
            <a
              href="https://twitter.com/privacy"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://twitter.com/privacy
            </a>
            , (Settings:&nbsp;
            <a
              href="https://twitter.com/personalization"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://twitter.com/personalization
            </a>
            ).
          </li>
          <li>
            <strong>YouTube:&nbsp;</strong>
            Soziales Netzwerk und
            Videoplattform;&nbsp;Dienstanbieter:&nbsp;Google Ireland Limited,
            Gordon House, Barrow Street, Dublin 4, Irland, Mutterunternehmen:
            Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043,
            USA;&nbsp;Datenschutzerklärung:&nbsp;
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://policies.google.com/privacy
            </a>
            ;&nbsp;Widerspruchsmöglichkeit (Opt-Out):&nbsp;
            <a
              href="https://adssettings.google.com/authenticated"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://adssettings.google.com/authenticated
            </a>
            .
          </li>
          <li>
            <strong>Xing:&nbsp;</strong>
            Soziales Netzwerk;&nbsp;Dienstanbieter:&nbsp;XING AG, Dammtorstraße
            29-32, 20354 Hamburg, Deutschland;&nbsp;Website:&nbsp;
            <a
              href="https://www.xing.de/"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://www.xing.de
            </a>
            ;&nbsp;Datenschutzerklärung:&nbsp;
            <a
              href="https://privacy.xing.com/de/datenschutzerklaerung"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://privacy.xing.com/de/datenschutzerklaerung
            </a>
            .
          </li>
        </ul>
        <h4 className="pt-40 pb-1" id="m328">
          Plugins und eingebettete Funktionen sowie Inhalte
        </h4>
        <p>
          Wir binden in unser Onlineangebot Funktions- und Inhaltselemente ein,
          die von den Servern ihrer jeweiligen Anbieter (nachfolgend bezeichnet
          als &#8222;Drittanbieter”) bezogen werden. Dabei kann es sich zum
          Beispiel um Grafiken, Videos oder Social-Media-Schaltflächen sowie
          Beiträge handeln (nachfolgend einheitlich bezeichnet als
          &#8222;Inhalte”).
        </p>
        <p>
          Die Einbindung setzt immer voraus, dass die Drittanbieter dieser
          Inhalte die IP-Adresse der Nutzer verarbeiten, da sie ohne die
          IP-Adresse die Inhalte nicht an deren Browser senden könnten. Die
          IP-Adresse ist damit für die Darstellung dieser Inhalte oder
          Funktionen erforderlich. Wir bemühen uns, nur solche Inhalte zu
          verwenden, deren jeweilige Anbieter die IP-Adresse lediglich zur
          Auslieferung der Inhalte verwenden. Drittanbieter können ferner
          sogenannte Pixel-Tags (unsichtbare Grafiken, auch als &#8222;Web
          Beacons &#8220;bezeichnet) für statistische oder Marketingzwecke
          verwenden. Durch die &#8222;Pixel-Tags &#8220;können Informationen,
          wie der Besucherverkehr auf den Seiten dieser Webseite, ausgewertet
          werden. Die pseudonymen Informationen können ferner in Cookies auf dem
          Gerät der Nutzer gespeichert werden und unter anderem technische
          Informationen zum Browser und zum Betriebssystem, zu verweisenden
          Webseiten, zur Besuchszeit sowie weitere Angaben zur Nutzung unseres
          Onlineangebotes enthalten als auch mit solchen Informationen aus
          anderen Quellen verbunden werden.
        </p>
        <p>
          <strong>Hinweise zu Rechtsgrundlagen:</strong>
          Sofern wir die Nutzer um deren Einwilligung in den Einsatz der
          Drittanbieter bitten, ist die Rechtsgrundlage der Verarbeitung von
          Daten die Einwilligung. Ansonsten werden die Daten der Nutzer auf
          Grundlage unserer berechtigten Interessen (d.h. Interesse an
          effizienten, wirtschaftlichen und empfängerfreundlichen Leistungen)
          verarbeitet. In diesem Zusammenhang möchten wir Sie auch auf die
          Informationen zur Verwendung von Cookies in dieser
          Datenschutzerklärung hinweisen.
        </p>
        <ul>
          <li>
            <strong>Verarbeitete Datenarten:</strong>
            Nutzungsdaten (z.B. besuchte Webseiten, Interesse an Inhalten,
            Zugriffszeiten), Meta-/Kommunikationsdaten (z.B.
            Geräte-Informationen, IP-Adressen), Standortdaten (Angaben zur
            geografischen Position eines Gerätes oder einer Person),
            Inhaltsdaten (z.B. Eingaben in Onlineformularen), Bestandsdaten
            (z.B. Namen, Adressen), Kontaktdaten (z.B. E-Mail, Telefonnummern).
          </li>
          <li>
            <strong>Betroffene Personen:</strong>
            Nutzer (z.B. Webseitenbesucher, Nutzer von Onlinediensten),
            Kommunikationspartner.
          </li>
          <li>
            <strong>Zwecke der Verarbeitung:</strong>
            Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit,
            Erbringung vertragliche Leistungen und Kundenservice,
            Kontaktanfragen und Kommunikation, Tracking (z.B.
            interessens-/verhaltensbezogenes Profiling, Nutzung von Cookies),
            Interessenbasiertes und verhaltensbezogenes Marketing, Profiling
            (Erstellen von Nutzerprofilen), Sicherheitsmaßnahmen, Verwaltung und
            Beantwortung von Anfragen.
          </li>
          <li>
            <strong>Rechtsgrundlagen:</strong>
            Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO),
            Einwilligung (Art. 6 Abs. 1 S. 1 lit. a. DSGVO), Vertragserfüllung
            und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b. DSGVO).
          </li>
        </ul>
        <p>
          <strong>Eingesetzte Dienste und Diensteanbieter:</strong>
        </p>
        <ul>
          <li>
            <strong>Facebook-Plugins und -Inhalte:&nbsp;</strong>
            Facebook Social Plugins und Inhalte &#8211;Hierzu können z.B.
            Inhalte wie Bilder, Videos oder Texte und Schaltflächen gehören, mit
            denen Nutzer Inhalte dieses Onlineangebotes innerhalb von Facebook
            teilen können. Die Liste und das Aussehen der Facebook Social
            Plugins können hier eingesehen werden:
            https://developers.facebook.com/docs/plugins/ &#8211;Wir sind
            gemeinsam mit Facebook Irland Ltd. für die Erhebung oder den Erhalt
            im Rahmen einer Übermittlung (jedoch nicht die weitere Verarbeitung)
            von &#8222;Event-Daten &#8220;, die Facebook mittels der
            Facebook-Social-Plugins (und Einbettungsfunktionen für Inhalte), die
            auf unserem Onlineangebot ausgeführt werden, erhebt oder im Rahmen
            einer Übermittlung zu folgenden Zwecken erhält, gemeinsam
            verantwortlich: a) Anzeige von Inhalten sowie Werbeinformationen,
            die den mutmaßlichen Interessen der Nutzer entsprechen; b)
            Zustellung kommerzieller und transaktionsbezogener Nachrichten (z.
            B. Ansprache von Nutzern via Facebook-Messenger); c) Verbesserung
            der Anzeigenauslieferung und Personalisierung von Funktionen und
            Inhalten (z. B. Verbesserung der Erkennung, welche Inhalte oder
            Werbeinformationen mutmaßlich den Interessen der Nutzer
            entsprechen). Wir haben mit Facebook eine spezielle Vereinbarung
            abgeschlossen (&#8222;Zusatz für Verantwortliche &#8220;,&nbsp;
            <a
              href="https://www.facebook.com/legal/controller_addendum"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://www.facebook.com/legal/controller_addendum
            </a>
            ), in der insbesondere geregelt wird, welche Sicherheitsmaßnahmen
            Facebook beachten muss (
            <a
              href="https://www.facebook.com/legal/terms/data_security_terms"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://www.facebook.com/legal/terms/data_security_terms
            </a>
            ) und in der Facebook sich bereit erklärt hat die Betroffenenrechte
            zu erfüllen (d. h. Nutzer können z. B. Auskünfte oder
            Löschungsanfragen direkt an Facebook richten). Hinweis: Wenn
            Facebook uns Messwerte, Analysen und Berichte bereitstellt (die
            aggregiert sind, d. h. keine Angaben zu einzelnen Nutzern erhalten
            und für uns anonym sind), dann erfolgt diese Verarbeitung nicht im
            Rahmen der gemeinsamen Verantwortlichkeit, sondern auf Grundlage
            eines Auftragsverarbeitungsvertrages
            (&#8222;Datenverarbeitungsbedingungen &#8222;,&nbsp;
            <a
              href="https://www.facebook.com/legal/terms/dataprocessing"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://www.facebook.com/legal/terms/dataprocessing
            </a>
            ) , der &#8222;Datensicherheitsbedingungen &#8220;(
            <a
              href="https://www.facebook.com/legal/terms/data_security_terms"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://www.facebook.com/legal/terms/data_security_terms
            </a>
            ) sowie im Hinblick auf die Verarbeitung in den USA auf Grundlage
            von Standardvertragsklauseln
            (&#8222;Facebook-EU-Datenübermittlungszusatz,&nbsp;
            <a
              href="https://www.facebook.com/legal/EU_data_transfer_addendum"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://www.facebook.com/legal/EU_data_transfer_addendum
            </a>
            ). Die Rechte der Nutzer (insbesondere auf Auskunft, Löschung,
            Widerspruch und Beschwerde bei zuständiger Aufsichtsbehörde), werden
            durch die Vereinbarungen mit Facebook nicht
            eingeschränkt;&nbsp;Dienstanbieter:&nbsp;Facebook Ireland Ltd., 4
            Grand Canal Square, Grand Canal Harbour, Dublin 2,
            Irland;&nbsp;Website:&nbsp;https://www.facebook.com;&nbsp;Datenschutzerklärung:&nbsp;https://www.facebook.com/about/privacy.
          </li>
          <li>
            <strong>Google Fonts:&nbsp;</strong>
            Wir binden die Schriftarten (&#8222;Google Fonts &#8220;) des
            Anbieters Google ein, wobei die Daten der Nutzer allein zu Zwecken
            der Darstellung der Schriftarten im Browser der Nutzer verwendet
            werden. Die Einbindung erfolgt auf Grundlage unserer berechtigten
            Interessen an einer technisch sicheren, wartungsfreien und
            effizienten Nutzung von Schriftarten, deren einheitlicher
            Darstellung sowie unter Berücksichtigung möglicher lizenzrechtlicher
            Restriktionen für deren Einbindung;&nbsp;Dienstanbieter:&nbsp;Google
            Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland,
            Mutterunternehmen: Google LLC, 1600 Amphitheatre Parkway, Mountain
            View, CA 94043, USA;&nbsp;Website:&nbsp;
            <a
              href="https://fonts.google.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://fonts.google.com/
            </a>
            ;&nbsp;Datenschutzerklärung:&nbsp;
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://policies.google.com/privacy
            </a>
            .
          </li>
          <li>
            <strong>Google Maps:&nbsp;</strong>
            Wir binden die Landkarten des Dienstes “Google Maps” des Anbieters
            Google ein. Zu den verarbeiteten Daten können insbesondere
            IP-Adressen und Standortdaten der Nutzer gehören, die jedoch nicht
            ohne deren Einwilligung (im Regelfall im Rahmen der Einstellungen
            ihrer Mobilgeräte vollzogen), erhoben
            werden;&nbsp;Dienstanbieter:&nbsp;Google Ireland Limited, Gordon
            House, Barrow Street, Dublin 4, Irland, Mutterunternehmen: Google
            LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043,
            USA;&nbsp;Website:&nbsp;
            <a
              href="https://cloud.google.com/maps-platform"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://cloud.google.com/maps-platform
            </a>
            ;&nbsp;Datenschutzerklärung:&nbsp;
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://policies.google.com/privacy
            </a>
            ;&nbsp;Widerspruchsmöglichkeit (Opt-Out):&nbsp;Opt-Out-Plugin:&nbsp;
            <a
              href="https://tools.google.com/dlpage/gaoptout?hl=de"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://tools.google.com/dlpage/gaoptout?hl=de
            </a>
            , Einstellungen für die Darstellung von Werbeeinblendungen:&nbsp;
            <a
              href="https://adssettings.google.com/authenticated"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://adssettings.google.com/authenticated
            </a>
            .
          </li>
          <li>
            <strong>reCAPTCHA:&nbsp;</strong>
            Wir binden die Funktion &#8222;reCAPTCHA &#8220;ein, um erkennen zu
            können, ob Eingaben (z.B. in Onlineformularen) von Menschen und
            nicht von automatisch agierenden Maschinen (sogenannten &#8222;Bots
            &#8220;) getätigt werden. Zu den verarbeiteten Daten können
            IP-Adressen, Informationen zu Betriebssystemen, Geräten oder
            verwendeten Browsern, Spracheinstellungen, Standort, Mausbewegungen,
            Tastaturanschläge, Verweildauer auf Webseiten, zuvor besuchte
            Webseiten, Interaktionen mit ReCaptcha auf anderen Webseiten, unter
            Umständen Cookies sowie Ergebnisse von manuellen Erkennungsvorgängen
            (z. B. Beantwortung von gestellten Fragen oder Auswahl von Objekten
            in Bildern) gehören;&nbsp;Dienstanbieter:&nbsp;Google Ireland
            Limited, Gordon House, Barrow Street, Dublin 4, Irland,
            Mutterunternehmen: Google LLC, 1600 Amphitheatre Parkway, Mountain
            View, CA 94043, USA;&nbsp;Website:&nbsp;
            <a
              href="https://www.google.com/recaptcha/"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://www.google.com/recaptcha/
            </a>
            ;&nbsp;Datenschutzerklärung:&nbsp;
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://policies.google.com/privacy
            </a>
            ;&nbsp;Widerspruchsmöglichkeit (Opt-Out):&nbsp;Opt-Out-Plugin:&nbsp;
            <a
              href="https://tools.google.com/dlpage/gaoptout?hl=de"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://tools.google.com/dlpage/gaoptout?hl=de
            </a>
            , Einstellungen für die Darstellung von Werbeeinblendungen:&nbsp;
            <a
              href="https://adssettings.google.com/authenticated"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://adssettings.google.com/authenticated
            </a>
            .
          </li>
          <li>
            <strong>Twitter-Plugins und -Inhalte:&nbsp;</strong>
            Twitter Plugins und -Schaltflächen &#8211;Hierzu können z.B. Inhalte
            wie Bilder, Videos oder Texte und Schaltflächen gehören, mit denen
            Nutzer Inhalte dieses Onlineangebotes innerhalb von Twitter teilen
            können;&nbsp;Dienstanbieter:&nbsp;Twitter International Company, One
            Cumberland Place, Fenian Street, Dublin 2 D02 AX07, Irland,
            Mutterunternehmen: Twitter Inc., 1355 Market Street, Suite 900, San
            Francisco, CA 94103, USA;&nbsp;Website:
            <a
              href="https://twitter.com/de"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://twitter.com/de
            </a>
            ;&nbsp;Datenschutzerklärung:
            <a
              href="https://twitter.com/privacy"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://twitter.com/privacy
            </a>
            , (Settings:&nbsp;
            <a
              href="https://twitter.com/personalization"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://twitter.com/personalization
            </a>
            ).
          </li>
          <li>
            <strong>YouTube-Videos:&nbsp;</strong>
            Videoinhalte;&nbsp;Dienstanbieter:&nbsp;Google Ireland Limited,
            Gordon House, Barrow Street, Dublin 4, Irland, Mutterunternehmen:
            Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043,
            USA;&nbsp;Website:
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://www.youtube.com
            </a>
            ;&nbsp;Datenschutzerklärung:
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://policies.google.com/privacy
            </a>
            ;&nbsp;Widerspruchsmöglichkeit (Opt-Out):&nbsp;Opt-Out-Plugin:&nbsp;
            <a
              href="https://tools.google.com/dlpage/gaoptout?hl=de"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://tools.google.com/dlpage/gaoptout?hl=de
            </a>
            , Einstellungen für die Darstellung von Werbeeinblendungen:&nbsp;
            <a
              href="https://adssettings.google.com/authenticated"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://adssettings.google.com/authenticated
            </a>
            .
          </li>
          <li>
            <strong>Vimeo:&nbsp;</strong>
            Videoinhalte;&nbsp;Dienstanbieter:&nbsp;Vimeo Inc., Attention: Legal
            Department, 555 West 18th Street New York, New York 10011,
            USA;&nbsp;Website:&nbsp;
            <a
              href="https://vimeo.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://vimeo.com
            </a>
            ;&nbsp;Datenschutzerklärung:&nbsp;
            <a
              href="https://vimeo.com/privacy"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://vimeo.com/privacy
            </a>
            ;&nbsp;Widerspruchsmöglichkeit (Opt-Out):&nbsp;Wir weisen darauf
            hin, dass Vimeo Google Analytics einsetzen kann und verweisen hierzu
            auf die Datenschutzerklärung (
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://policies.google.com/privacy
            </a>
            ) sowie die Opt-Out-Möglichkeiten für Google-Analytics (
            <a
              href="https://tools.google.com/dlpage/gaoptout?hl=de"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://tools.google.com/dlpage/gaoptout?hl=de
            </a>
            ) oder die Einstellungen von Google für die Datennutzung zu
            Marketingzwecken (
            <a
              href="https://adssettings.google.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://adssettings.google.com/
            </a>
            ).
          </li>
        </ul>
        <h4 className="pt-40 pb-1" id="m12">
          Löschung von Daten
        </h4>
        <p>
          Die von uns verarbeiteten Daten werden nach Maßgabe der gesetzlichen
          Vorgaben gelöscht, sobald deren zur Verarbeitung erlaubten
          Einwilligungen widerrufen werden oder sonstige Erlaubnisse entfallen
          (z.B., wenn der Zweck der Verarbeitung dieser Daten entfallen ist oder
          sie für den Zweck nicht erforderlich sind).
        </p>
        <p>
          Sofern die Daten nicht gelöscht werden, weil sie für andere und
          gesetzlich zulässige Zwecke erforderlich sind, wird deren Verarbeitung
          auf diese Zwecke beschränkt. D.h., die Daten werden gesperrt und nicht
          für andere Zwecke verarbeitet. Das gilt z.B. für Daten, die aus
          handels- oder steuerrechtlichen Gründen aufbewahrt werden müssen oder
          deren Speicherung zur Geltendmachung, Ausübung oder Verteidigung von
          Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen
          oder juristischen Person erforderlich ist.
        </p>
        <p>
          Weitere Hinweise zu der Löschung von personenbezogenen Daten können
          ferner im Rahmen der einzelnen Datenschutzhinweise dieser
          Datenschutzerklärung erfolgen.
        </p>
        <h4 className="pt-40 pb-1" id="m15">
          Änderung und Aktualisierung der Datenschutzerklärung
        </h4>
        <p>
          Wir bitten Sie, sich regelmäßig über den Inhalt unserer
          Datenschutzerklärung zu informieren. Wir passen die
          Datenschutzerklärung an, sobald die Änderungen der von uns
          durchgeführten Datenverarbeitungen dies erforderlich machen. Wir
          informieren Sie, sobald durch die Änderungen eine Mitwirkungshandlung
          Ihrerseits (z.B. Einwilligung) oder eine sonstige individuelle
          Benachrichtigung erforderlich wird.
        </p>
        <p>
          Sofern wir in dieser Datenschutzerklärung Adressen und
          Kontaktinformationen von Unternehmen und Organisationen angeben,
          bitten wir zu beachten, dass die Adressen sich über die Zeit ändern
          können und bitten die Angaben vor Kontaktaufnahme zu prüfen.
        </p>
        <h4 className="pt-40 pb-1" id="m10">
          Rechte der betroffenen Personen
        </h4>
        <p>
          Ihnen stehen als Betroffene nach der DSGVO verschiedene Rechte zu, die
          sich insbesondere aus Art. 15 bis 21 DSGVO ergeben:
        </p>
        <ul>
          <li>
            <strong>Widerspruchsrecht:</strong>
            Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen
            Situation ergeben, jederzeit gegen die Verarbeitung der Sie
            betreffenden personenbezogenen Daten, die aufgrund von Art. 6 Abs. 1
            lit. e oder f DSGVO erfolgt, Widerspruch einzulegen; dies gilt auch
            für ein auf diese Bestimmungen gestütztes Profiling. Werden die Sie
            betreffenden personenbezogenen Daten verarbeitet, um Direktwerbung
            zu betreiben, haben Sie das Recht, jederzeit Widerspruch gegen die
            Verarbeitung der Sie betreffenden personenbezogenen Daten zum Zwecke
            derartiger Werbung einzulegen; dies gilt auch für das Profiling,
            soweit es mit solcher Direktwerbung in Verbindung steht.
          </li>
          <li>
            <strong>Widerrufsrecht bei Einwilligungen:</strong>
            Sie haben das Recht, erteilte Einwilligungen jederzeit zu
            widerrufen.
          </li>
          <li>
            <strong>Auskunftsrecht:</strong>
            Sie haben das Recht, eine Bestätigung darüber zu verlangen, ob
            betreffende Daten verarbeitet werden und auf Auskunft über diese
            Daten sowie auf weitere Informationen und Kopie der Daten
            entsprechend den gesetzlichen Vorgaben.
          </li>
          <li>
            <strong>Recht auf Berichtigung:</strong>
            Sie haben entsprechend den gesetzlichen Vorgaben das Recht, die
            Vervollständigung der Sie betreffenden Daten oder die Berichtigung
            der Sie betreffenden unrichtigen Daten zu verlangen.
          </li>
          <li>
            <strong>
              Recht auf Löschung und Einschränkung der Verarbeitung:
            </strong>
            Sie haben nach Maßgabe der gesetzlichen Vorgaben das Recht, zu
            verlangen, dass Sie betreffende Daten unverzüglich gelöscht werden,
            bzw. alternativ nach Maßgabe der gesetzlichen Vorgaben eine
            Einschränkung der Verarbeitung der Daten zu verlangen.
          </li>
          <li>
            <strong>Recht auf Datenübertragbarkeit:</strong>
            Sie haben das Recht, Sie betreffende Daten, die Sie uns
            bereitgestellt haben, nach Maßgabe der gesetzlichen Vorgaben in
            einem strukturierten, gängigen und maschinenlesbaren Format zu
            erhalten oder deren Übermittlung an einen anderen Verantwortlichen
            zu fordern.
          </li>
          <li>
            <strong>Beschwerde bei Aufsichtsbehörde:</strong>
            Sie haben ferner nach Maßgabe der gesetzlichen Vorgaben das Recht,
            bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat Ihres
            gewöhnlichen Aufenthaltsorts, Ihres Arbeitsplatzes oder des Orts des
            mutmaßlichen Verstoßes Beschwerde einzulegen, wenn Sie der Ansicht
            sind, dass die Verarbeitung der Sie betreffenden personenbezogenen
            Daten gegen die DSGVO verstößt.
          </li>
        </ul>
        <h4 className="pt-40 pb-1" id="m42">
          Begriffsdefinitionen
        </h4>
        <p>
          In diesem Abschnitt erhalten Sie eine Übersicht über die in dieser
          Datenschutzerklärung verwendeten Begrifflichkeiten. Viele der Begriffe
          sind dem Gesetz entnommen und vor allem im Art. 4 DSGVO definiert. Die
          gesetzlichen Definitionen sind verbindlich. Die nachfolgenden
          Erläuterungen sollen dagegen vor allem dem Verständnis dienen. Die
          Begriffe sind alphabetisch sortiert.
        </p>
        <ul>
          <li>
            <strong>Besuchsaktionsauswertung:</strong>
            &#8222;Besuchsaktionsauswertung &#8220;(englisch &#8222;Conversion
            Tracking &#8220;) bezeichnet ein Verfahren, mit dem die Wirksamkeit
            von Marketingmaßnahmen festgestellt werden kann. Dazu wird im
            Regelfall ein Cookie auf den Geräten der Nutzer innerhalb der
            Webseiten, auf denen die Marketingmaßnahmen erfolgen, gespeichert
            und dann erneut auf der Zielwebseite abgerufen. Beispielsweise
            können wir so nachvollziehen, ob die von uns auf anderen Webseiten
            geschalteten Anzeigen erfolgreich waren).
          </li>
          <li>
            <strong>Bonitätsauskunft:</strong>
            Automatisierte Entscheidungen beruhen auf einer automatischen
            Datenverarbeitung ohne menschliches Zutun (z.B. im Fall einer
            automatische Ablehnung eines Kaufs auf Rechnung, eines
            Online-Kreditantrags oder ein Online-Bewerbungsverfahren ohne
            jegliches menschliche Eingreifen. Derartige automatisierten
            Entscheidungen sind nach Art. 22 DSGVO nur zulässig, wenn Betroffene
            einwilligen, wenn sie für eine Vertragserfüllung erforderlich sind
            oder wenn nationale Gesetze diese Entscheidungen erlauben.
          </li>
          <li>
            <strong>Cross-Device Tracking:</strong>
            Das Cross-Device Tracking ist eine Form des Trackings, bei der
            Verhaltens- und Interessensinformationen der Nutzer
            geräteübergreifend in sogenannten Profilen erfasst werden, indem den
            Nutzern eine Onlinekennung zugeordnet wird. Hierdurch können die
            Nutzerinformationen unabhängig von verwendeten Browsern oder Geräten
            (z.B. Mobiltelefonen oder Desktopcomputern) im Regelfall für
            Marketingzwecke analysiert werden. Die Onlinekennung ist bei den
            meisten Anbietern nicht mit Klardaten, wie Namen, Postadressen oder
            E-Mail-Adressen, verknüpft.
          </li>
          <li>
            <strong>IP-Masking:</strong>
            Als &#8222;IP-Masking” wird eine Methode bezeichnet, bei der das
            letzte Oktett, d.h., die letzten beiden Zahlen einer IP-Adresse,
            gelöscht wird, damit die IP-Adresse nicht mehr der eindeutigen
            Identifizierung einer Person dienen kann. Daher ist das IP-Masking
            ein Mittel zur Pseudonymisierung von Verarbeitungsverfahren,
            insbesondere im Onlinemarketing
          </li>
          <li>
            <strong>
              Interessenbasiertes und verhaltensbezogenes Marketing:
            </strong>
            Von interessens- und/oder verhaltensbezogenem Marketing spricht man,
            wenn potentielle Interessen von Nutzern an Anzeigen und sonstigen
            Inhalten möglichst genau vorbestimmt werden. Dies geschieht anhand
            von Angaben zu deren Vorverhalten (z.B. Aufsuchen von bestimmten
            Webseiten und Verweilen auf diesen, Kaufverhaltens oder Interaktion
            mit anderen Nutzern), die in einem sogenannten Profil gespeichert
            werden. Zu diesen Zwecken werden im Regelfall Cookies eingesetzt.
          </li>
          <li>
            <strong>Konversionsmessung:</strong>
            Die Konversionsmessung ist ein Verfahren, mit dem die Wirksamkeit
            von Marketingmaßnahmen festgestellt werden kann. Dazu wird im
            Regelfall ein Cookie auf den Geräten der Nutzer innerhalb der
            Webseiten, auf denen die Marketingmaßnahmen erfolgen, gespeichert
            und dann erneut auf der Zielwebseite abgerufen. Beispielsweise
            können wir so nachvollziehen, ob die von uns auf anderen Webseiten
            geschalteten Anzeigen erfolgreich waren.
          </li>
          <li>
            <strong>Personenbezogene Daten:</strong>
            &#8222;Personenbezogene Daten“ sind alle Informationen, die sich auf
            eine identifizierte oder identifizierbare natürliche Person (im
            Folgenden &#8222;betroffene Person“) beziehen; als identifizierbar
            wird eine natürliche Person angesehen, die direkt oder indirekt,
            insbesondere mittels Zuordnung zu einer Kennung wie einem Namen, zu
            einer Kennnummer, zu Standortdaten, zu einer Online-Kennung (z.B.
            Cookie) oder zu einem oder mehreren besonderen Merkmalen
            identifiziert werden kann, die Ausdruck der physischen,
            physiologischen, genetischen, psychischen, wirtschaftlichen,
            kulturellen oder sozialen Identität dieser natürlichen Person sind.
          </li>
          <li>
            <strong>Profiling:</strong>
            Als &#8222;Profiling“ wird jede Art der automatisierten Verarbeitung
            personenbezogener Daten bezeichnet, die darin besteht, dass diese
            personenbezogenen Daten verwendet werden, um bestimmte persönliche
            Aspekte, die sich auf eine natürliche Person beziehen (je nach Art
            des Profilings gehören dazu Informationen betreffend das Alter, das
            Geschlecht, Standortdaten und Bewegungsdaten, Interaktion mit
            Webseiten und deren Inhalten, Einkaufsverhalten, soziale
            Interaktionen mit anderen Menschen) zu analysieren, zu bewerten
            oder, um sie vorherzusagen (z.B. die Interessen an bestimmten
            Inhalten oder Produkten, das Klickverhalten auf einer Webseite oder
            den Aufenthaltsort). Zu Zwecken des Profilings werden häufig Cookies
            und Web-Beacons eingesetzt.
          </li>
          <li>
            <strong>Reichweitenmessung:</strong>
            Die Reichweitenmessung (auch als Web Analytics bezeichnet) dient der
            Auswertung der Besucherströme eines Onlineangebotes und kann das
            Verhalten oder Interessen der Besucher an bestimmten Informationen,
            wie z.B. Inhalten von Webseiten, umfassen. Mit Hilfe der
            Reichweitenanalyse können Webseiteninhaber z.B. erkennen, zu welcher
            Zeit Besucher ihre Webseite besuchen und für welche Inhalte sie sich
            interessieren. Dadurch können sie z.B. die Inhalte der Webseite
            besser an die Bedürfnisse ihrer Besucher anpassen. Zu Zwecken der
            Reichweitenanalyse werden häufig pseudonyme Cookies und Web-Beacons
            eingesetzt, um wiederkehrende Besucher zu erkennen und so genauere
            Analysen zur Nutzung eines Onlineangebotes zu erhalten.
          </li>
          <li>
            <strong>Remarketing:</strong>
            Vom &#8222;Remarketing“ bzw. &#8222;Retargeting“ spricht man, wenn
            z.B. zu Werbezwecken vermerkt wird, für welche Produkte sich ein
            Nutzer auf einer Webseite interessiert hat, um den Nutzer auf
            anderen Webseiten an diese Produkte, z.B. in Werbeanzeigen, zu
            erinnern.
          </li>
          <li>
            <strong>Standortdaten:</strong>
            Standortdaten entstehen, wenn sich ein mobiles Gerät (oder ein
            anderes Gerät mit den technischen Voraussetzungen einer
            Standortbestimmung) mit einer Funkzelle, einem WLAN oder ähnlichen
            technischen Mittlern und Funktionen der Standortbestimmung,
            verbindet. Standortdaten dienen der Angabe, an welcher geografisch
            bestimmbaren Position der Erde sich das jeweilige Gerät befindet.
            Standortdaten können z. B. eingesetzt werden, um Kartenfunktionen
            oder andere von einem Ort abhängige Informationen darzustellen.
          </li>
          <li>
            <strong>Tracking:</strong>
            Vom &#8222;Tracking“ spricht man, wenn das Verhalten von Nutzern
            über mehrere Onlineangebote hinweg nachvollzogen werden kann. Im
            Regelfall werden im Hinblick auf die genutzten Onlineangebote
            Verhaltens- und Interessensinformationen in Cookies oder auf Servern
            der Anbieter der Trackingtechnologien gespeichert (sogenanntes
            Profiling). Diese Informationen können anschließend z.B. eingesetzt
            werden, um den Nutzern Werbeanzeigen anzuzeigen, die voraussichtlich
            deren Interessen entsprechen.
          </li>
          <li>
            <strong>Verantwortlicher:</strong>
            Als &#8222;Verantwortlicher“ wird die natürliche oder juristische
            Person, Behörde, Einrichtung oder andere Stelle, die allein oder
            gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung
            von personenbezogenen Daten entscheidet, bezeichnet.
          </li>
          <li>
            <strong>Verarbeitung:</strong>
            &#8222;Verarbeitung &#8220;ist jeder mit oder ohne Hilfe
            automatisierter Verfahren ausgeführte Vorgang oder jede solche
            Vorgangsreihe im Zusammenhang mit personenbezogenen Daten. Der
            Begriff reicht weit und umfasst praktisch jeden Umgang mit Daten,
            sei es das Erheben, das Auswerten, das Speichern, das Übermitteln
            oder das Löschen.
          </li>
          <li>
            <strong>Zielgruppenbildung:</strong>
            Von Zielgruppenbildung (bzw. &#8222;Custom Audiences“) spricht man,
            wenn Zielgruppen für Werbezwecke, z.B. Einblendung von
            Werbeanzeigen, bestimmt werden. So kann z.B. anhand des Interesses
            eines Nutzers an bestimmten Produkten oder Themen im Internet
            geschlussfolgert werden, dass dieser Nutzer sich für Werbeanzeigen
            für ähnliche Produkte oder den Onlineshop, in dem er die Produkte
            betrachtet hat, interessiert. Von &#8222;Lookalike Audiences“ (bzw.
            ähnlichen Zielgruppen) spricht man wiederum, wenn die als geeignet
            eingeschätzten Inhalte Nutzern angezeigt werden, deren Profile bzw.
            Interessen mutmaßlich den Nutzern, zu denen die Profile gebildet
            wurden, entsprechen. Zu Zwecken der Bildung von Custom Audiences und
            Lookalike Audiences werden im Regelfall Cookies und Web-Beacons
            eingesetzt.
          </li>
        </ul>
        {/* <div className="login__inner p-relative z-index-1">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8 col-md-10">
              <div className="login__wrapper">
                <div className="login__top mb-30 text-center">
                  <h3 className="login__title"> Register Now!</h3>
                  <p>You can signup here</p>
                </div>
                <div className="login__form">
                  <RegisterForm />
                  <div className="login__register-now">
                    <p>
                      Already have an account? <Link href="/login">Log in</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Datenschutz;
