# Quality Gates Reference (ქართული)

🌐 **Languages:** 🇺🇸 [English](../../../../architecture/QUALITY_GATES.md) · 🇪🇹 [am](../../../am/docs/architecture/QUALITY_GATES.md) · 🇸🇦 [ar](../../../ar/docs/architecture/QUALITY_GATES.md) · 🇦🇿 [az](../../../az/docs/architecture/QUALITY_GATES.md) · 🇧🇬 [bg](../../../bg/docs/architecture/QUALITY_GATES.md) · 🇧🇩 [bn](../../../bn/docs/architecture/QUALITY_GATES.md) · 🇧🇦 [bs](../../../bs/docs/architecture/QUALITY_GATES.md) · 🇨🇿 [cs](../../../cs/docs/architecture/QUALITY_GATES.md) · 🇩🇰 [da](../../../da/docs/architecture/QUALITY_GATES.md) · 🇩🇪 [de](../../../de/docs/architecture/QUALITY_GATES.md) · 🇬🇷 [el](../../../el/docs/architecture/QUALITY_GATES.md) · 🇪🇸 [es](../../../es/docs/architecture/QUALITY_GATES.md) · 🇪🇪 [et](../../../et/docs/architecture/QUALITY_GATES.md) · 🇮🇷 [fa](../../../fa/docs/architecture/QUALITY_GATES.md) · 🇫🇮 [fi](../../../fi/docs/architecture/QUALITY_GATES.md) · 🇫🇷 [fr](../../../fr/docs/architecture/QUALITY_GATES.md) · 🇮🇪 [ga](../../../ga/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [gu](../../../gu/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [ha](../../../ha/docs/architecture/QUALITY_GATES.md) · 🇮🇱 [he](../../../he/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [hi](../../../hi/docs/architecture/QUALITY_GATES.md) · 🇭🇷 [hr](../../../hr/docs/architecture/QUALITY_GATES.md) · 🇭🇺 [hu](../../../hu/docs/architecture/QUALITY_GATES.md) · 🇦🇲 [hy](../../../hy/docs/architecture/QUALITY_GATES.md) · 🇮🇩 [id](../../../id/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [ig](../../../ig/docs/architecture/QUALITY_GATES.md) · 🇮🇹 [it](../../../it/docs/architecture/QUALITY_GATES.md) · 🇯🇵 [ja](../../../ja/docs/architecture/QUALITY_GATES.md) · 🇰🇭 [km](../../../km/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [kn](../../../kn/docs/architecture/QUALITY_GATES.md) · 🇰🇷 [ko](../../../ko/docs/architecture/QUALITY_GATES.md) · 🇱🇹 [lt](../../../lt/docs/architecture/QUALITY_GATES.md) · 🇱🇻 [lv](../../../lv/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [ml](../../../ml/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [mr](../../../mr/docs/architecture/QUALITY_GATES.md) · 🇲🇾 [ms](../../../ms/docs/architecture/QUALITY_GATES.md) · 🇲🇹 [mt](../../../mt/docs/architecture/QUALITY_GATES.md) · 🇲🇲 [my](../../../my/docs/architecture/QUALITY_GATES.md) · 🇳🇵 [ne](../../../ne/docs/architecture/QUALITY_GATES.md) · 🇳🇱 [nl](../../../nl/docs/architecture/QUALITY_GATES.md) · 🇳🇴 [no](../../../no/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [or](../../../or/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [pa](../../../pa/docs/architecture/QUALITY_GATES.md) · 🇵🇭 [phi](../../../phi/docs/architecture/QUALITY_GATES.md) · 🇵🇱 [pl](../../../pl/docs/architecture/QUALITY_GATES.md) · 🇵🇹 [pt](../../../pt/docs/architecture/QUALITY_GATES.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/QUALITY_GATES.md) · 🇷🇴 [ro](../../../ro/docs/architecture/QUALITY_GATES.md) · 🇷🇺 [ru](../../../ru/docs/architecture/QUALITY_GATES.md) · 🇱🇰 [si](../../../si/docs/architecture/QUALITY_GATES.md) · 🇸🇰 [sk](../../../sk/docs/architecture/QUALITY_GATES.md) · 🇸🇮 [sl](../../../sl/docs/architecture/QUALITY_GATES.md) · 🇷🇸 [sr](../../../sr/docs/architecture/QUALITY_GATES.md) · 🇸🇪 [sv](../../../sv/docs/architecture/QUALITY_GATES.md) · 🇰🇪 [sw](../../../sw/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [ta](../../../ta/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [te](../../../te/docs/architecture/QUALITY_GATES.md) · 🇹🇭 [th](../../../th/docs/architecture/QUALITY_GATES.md) · 🇹🇷 [tr](../../../tr/docs/architecture/QUALITY_GATES.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/QUALITY_GATES.md) · 🇵🇰 [ur](../../../ur/docs/architecture/QUALITY_GATES.md) · 🇺🇿 [uz](../../../uz/docs/architecture/QUALITY_GATES.md) · 🇻🇳 [vi](../../../vi/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [yo](../../../yo/docs/architecture/QUALITY_GATES.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/QUALITY_GATES.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/architecture/QUALITY_GATES.md)

---

ეს დოკუმენტი OmniRoute-ში CI-ის ხარისხის ყველა ბარიერის ავტორიტეტული ცნობარია.
იგი აღწერს თითოეულ ბარიერს, რას ამოწმებს ის, რომელ CI დავალებაში სრულდება, იყენებს თუ არა
ეტალონის ეტაპობრივი გამკაცრების ან ჩაბარება/ჩავარდნის პოლიტიკას და ბლოკავს თუ არა აგებას, თუ მხოლოდ სარეკომენდაციო ხასიათი აქვს.

მოკლე შეჯამებისა და დაშვებული გამონაკლისების სიის პოლიტიკისთვის იხილეთ სექცია „Quality Gates & Ratchets“
ფაილში `AGENTS.md`. იმავე სისტემის კრიტიკული შეფასების, სიმწიფის კლასიფიკაციისა და კონკრეტულ ხელსაწყოებზე დამოუკიდებელი
გამეორების გეგმისთვის იხილეთ
[ხარისხის ბარიერების სახელმძღვანელო](../ops/QUALITY_GATE_PLAYBOOK.md).

---

## გეითების ინვენტარი და შესრულების პროფილები

### კანდიდატის დაშვება

CI-ისა და Quality Gates-ის სამუშაო პროცესები თითოეული გასცემს სტაბილურ ვერდიქტს: `Gate / CI` და
`Gate / Quality`. მათი ვერსირებული დაშვების პოლიტიკა თითოეულ ზედა დონის დავალებას
სავალდებულოდ ან სარეკომენდაციოდ განსაზღვრავს. შესაბამისი სავალდებულო დავალება წარმატებით უნდა დასრულდეს: გამოტოვებული,
გაუქმებული, გამოტოვებულად მონიშნული, მოლოდინის რეჟიმში მყოფი და უცნობი შედეგები PASS-ს ვერ დაადასტურებს. მხოლოდ
დოკუმენტაციასთან ან მხოლოდ კატალოგთან დაკავშირებულმა მართებულმა კლასიფიკაციამ შეიძლება კოდის ნაკადი შეუსაბამოდ აქციოს;
შავი PR მიღებულ კანდიდატად არ ითვლება. `hotfix` ჭდე მტკიცებულების მოთხოვნას არ აუქმებს.

ორივე სამუშაო პროცესი მოიცავს PR-ებს და main/release ბრენჩებზე push-ებს, ხელით გაშვებასა და
merge-group მოვლენებს. Push, dispatch და merge-group სრულ შერჩევას უშვებს. ფორკები
და merge group-ები ჰოსტინგურ რანერებს იყენებს იმ დავალებებისთვის, რომლებიც სხვა შემთხვევაში თვითჰოსტინგურ
რანერებს აირჩევდა; დანერგვამდე ჰოსტინგური რესურსების საკმარისობა უნდა შემოწმდეს.

თითოეული JSON ქვითარი მიუთითებს ამოღებულ SHA-ს, სამუშაო პროცესის გაშვებასა და მცდელობას.
CLI უარყოფს checkout/event SHA-ს შეუსაბამობას. სამუშაო პროცესის ტესტები პოლიტიკის წევრობას
ვერდიქტის დავალების `needs` სიას უკავშირებს, რათა ახალი ან წაშლილი ნაკადი შეუმჩნევლად ვერ გაქრეს.
ქვითრები მოიცავს საკუთარ სამუშაო პროცესს და არა გამოქვეყნებას, განთავსებას ან
არსებული სარეკომენდაციო სკანერის შიდა ნაწილებს. ბრენჩის წესებში ორივე შემოწმების სახელის გააქტიურება
ცალკე ადმინისტრაციული ცვლილებაა; ამ დავალებების დამატება თავისთავად ბრენჩს არ იცავს.

### სტატიკური სკანირების ინვენტარი

ვერსირებული npm-ალიასების ინვენტარი და სტატიკური სკანირების წევრობა მდებარეობს
`config/quality/gate-manifest.json`-ში. `package.json`-თან მიმართებით სკრიპტების სახელებისა და ზუსტი ბრძანებების
შესამოწმებლად გაუშვით `npm run check:gate-manifest`; დამატებები, წაშლები და
ბრძანებების აცდენა შეცდომით ასრულებს როგორც ლოკალურ ჰუკს, ისე CI-ში ცვლილებების კლასიფიკაციის დავალებებს.
ალიასი არ არის სამუშაო პროცესის დავალება, მატრიცის ეგზემპლარი ან სატესტო შემთხვევა: ეს რაოდენობები
ურთიერთჩანაცვლებადად არ უნდა იყოს წარმოდგენილი.

არჩეული ალიასების მათი შესრულების გარეშე სანახავად გამოიყენეთ `npm run quality:scan -- --list` ან `npm run quality:scan:fast -- --list`.
რანერი npm-ის შესვლის წერტილს იძახებს, ამიტომ მისი შესრულების გარემო
(მათ შორის Bun, სადაც ის კონფიგურირებულია) შენარჩუნებულია.
მანიფესტი ამ პროფილების მიღმა არსებულ ალიასებს ცალკე გამოსაძახებლებად აღრიცხავს, ხოლო
ტექნიკური მომსახურების ბრძანებები მხოლოდ წაკითხვის სკანირების პროფილებში აკრძალულია.

ეს პროფილები მხოლოდ სტატიკურ სკანირებას მოიცავს. ისინი არ ადასტურებს პროდუქტის ტესტებს,
დაფარვას, პაკეტირებას, გარე შემოწმებებს ან კანდიდატის სრულ მიღებას რელიზისთვის.
სამუშაო პროცესში დაშვება იყენებს დაკავშირებულ `config/quality/admission-policy.json`-სა და
`scripts/quality/admission-verdict.mjs`-ს. რელიზის დამკვირვებლის პროფილები განცალკევებულია;
მათი შესაბამისი შემოწმებები და ქვითრები დამოუკიდებლად შეამოწმეთ. ქვემოთ მოცემული ტექსტური
ინვენტარი საცნობარო მასალაა და არა იმის მტკიცებულება, რომ გეითი რეალურად გაეშვა.

სკრიპტები განთავსებულია `scripts/check/`-ში (პოლიტიკის გეითები) და `scripts/quality/`-ში (რატჩეტის ძრავა).
CI-ის ჭეშმარიტების წყაროა `.github/workflows/ci.yml`.

### რელიზის PR-ის სწრაფი გზა (`quality.yml`)

`.github/workflows/quality.yml` ავსებს CI-ს main/release PR-ებზე, დაცულ ბრენჩებზე
push-ებისას, dispatch-ისა და merge group-ებისთვის. PR-ები იყენებს ბილიკებით გაფილტრულ სწრაფ შემოწმებებს. მუდმივად
გათიშული დუბლირებული build წაიშალა; რეალური build/package/boot შემოწმებები CI-ში რჩება.

| დავალება                                         | ფარგლები                                                                                                                                                                                                               | დამბლოკავი             |
| ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- |
| `Docs Gates (fast-path)`                         | დოკუმენტაციის/კოდის PR-ები; API დოკუმენტაციის მითითებები და სრული დოკუმენტაცია                                                                                                                                         | დიახ                   |
| `Fast Quality Gates`                             | კოდის PR-ები; სტატიკური შემოწმებები, ტიპების შემოწმება, დაფის ტიპების შემოწმება, ცვლილებით ზემოქმედებული მოდულური ტესტები                                                                                              | დიახ                   |
| `Forgotten sibling tests`                        | კოდის PR-ები; შეცვლილი მოდულებიდან სტატიკურ მომხმარებლებსა და შესაძლო მონათესავე ტესტებამდე მიკვლევა; barrel და დინამიკური იმპორტის ბილიკები აისახება სარეკომენდაციო დიაგნოსტიკად, მითითებული allowlist გამონაკლისებით | **სარეკომენდაციო**     |
| `Vitest (fast-path)`                             | კოდის PR-ები; სწრაფი vitest კომპლექტი                                                                                                                                                                                  | დიახ                   |
| `Unit Tests fast-path`                           | კოდის PR-ები; 4-შარდიანი მოდულური ტესტების კომპლექტი                                                                                                                                                                   | დიახ                   |
| `No new ESLint warnings`                         | კოდის PR-ები; ჩახშობების გამთვალისწინებელი lint-ის დამცავი                                                                                                                                                             | დიახ, ფორკების ჩათვლით |
| `Merge integrity (changelog + generated skills)` | არაშავი PR-ები; ცვლილებების ჟურნალისა და გენერირებული უნარების სინქრონიზაცია                                                                                                                                           | დიახ, ფორკების ჩათვლით |

#### დავიწყებული მონათესავე ტესტების ანგარიში

`npm run check:forgotten-sibling-tests` ხელახლა იყენებს ტესტებზე ზემოქმედების რუკის უკან მდგომ იმპორტების რეზოლვერს.
თითოეული შეცვლილი საწარმოო მოდულისთვის ის დეტერმინისტულ
`changed module/symbol -> static consumer -> candidate sibling test` ჯაჭვებს ასახავს, როდესაც შესაძლო
ტესტი pull-request-ის diff-ში არ არის. Markdown შეჯამება და JSON შედეგი ინახება, როგორც
`forgotten-sibling-tests` სამუშაო პროცესის არტეფაქტი, ნებისმიერი დამბლოკავი დანერგვის დაწყებამდე კალიბრაციისთვის.

Barrel re-export-ები და დინამიკური import-ები მხოლოდ resolution-ის დიაგნოსტიკისთვის გამოიყენება; ისინი არასოდეს ქმნიან
დამბლოკავ finding-ს. განხილული გამონაკლისები ინახება
`config/quality/forgotten-sibling-allowlist.json`-ში. თითოეულ ჩანაწერში მითითებული უნდა იყოს consumer და candidate
ტესტები, მოცემული უნდა იყოს კონკრეტული დასაბუთება და GitHub issue-ის ან pull request-ის ბმული. არასწორად ფორმირებული ჩანაწერები
fail-closed პრინციპით მუშავდება. გამონაკლისები ვერ ჩაახშობს წაშლილ candidate ტესტს ან diff-ს, რომელიც ამატებს `.skip`/`.todo`-ს;
assertion-ების შესუსტება და სხვა სახის შენიღბვა კვლავ დამოუკიდებლად დამბლოკავი
`check:test-masking` gate-ის პასუხისმგებლობაში რჩება.

### Job: `lint`

ეშვება `main`-ის მიმართულებით შექმნილ ყოველ PR-ზე. წარუმატებლობის შემთხვევაში merge-ს ბლოკავს.

| Script (`npm run ...`)            | რას ამოწმებს                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | ბლოკავს                                        |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| `check:node-runtime`              | Node.js-ის ვერსია მხარდაჭერილ დიაპაზონშია                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | დიახ                                           |
| `check:cycles`                    | `src/` + `open-sse/`; AST (`import` / `export`, tsconfig `paths`). `check:cycles`: `cycles > 0 → exit 1`; `SCC → stderr` (#15281). `check:cycles:ratchet` (რომელსაც CI უშვებს) ბლოკავს, როდესაც რაოდენობა აჭარბებს `quality-baseline.json`-ში განსაზღვრულ `metrics.cycles` ზედა ზღვარს — ამჟამად 14, `direction: down`, ამიტომ ის მხოლოდ შეიძლება შემცირდეს (#15159 G-01/G-02)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | დიახ (ratchet)                                 |
| `check:boundary`                  | `open-sse → src` კავშირი: engine-იდან app-ში უნიკალური file-to-file import-ები (`scripts/quality/measure-boundary.mjs`; edge-ების სია v4 core/module-split remediation-ის backlog-ია). Bare რეჟიმი = სარეკომენდაციო ანგარიში (იგივე, რაც `quality:boundary`). `check:boundary:ratchet` (რომელსაც CI უშვებს და რომელიც ასევე შედის `quality.yml`-ის fast-gates ratchet ციკლში) ბლოკავს, როდესაც რაოდენობა აჭარბებს `quality-baseline.json`-ში `metrics.boundaryOpenSseToSrc`-ისთვის განსაზღვრულ ზედა ზღვარს — საწყის მნიშვნელობად დაყენებულია გაზომილი 771, `direction: down`; `--update` მას მხოლოდ ამცირებს; PR-ებზე base-relative რეჟიმში მუშაობს (`--base-ref`, იხილეთ ქვემოთ)                                                                                                                                                                                                                                                                                                                                                                 | დიახ (ratchet)                                 |
| `check:route-validation:t06`      | ყველა route-ზე წარმოდგენილია Zod schema-ები (Tier 6 პოლიტიკა)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | დიახ                                           |
| `check:any-budget:t11`            | `@ts-expect-error // any`-ის რაოდენობა ბიუჯეტს არ აღემატება (Tier 11-ის შეზღუდვის მექანიზმი)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | დიახ                                           |
| `check:provider-consistency`      | `providers.ts`-ში არსებულ ყველა პროვაიდერს აქვს შესაბამისი ჩანაწერი `providerRegistry.ts`-ში (და პირიქით, დაშვებული სიის ფარგლებში)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | დიახ                                           |
| `check:model-lifecycle`           | ხელით მხარდაჭერილი მარშრუტიზაციის სამი ცხრილი შეთანხმებული რჩება რეპოზიტორიაში შენახულ სასიცოცხლო ციკლის სნეპშოტთან (#11503): `FITNESS_TABLE` (`taskFitness.ts`) არ ანიჭებს ქულას არცერთ ექსპლუატაციიდან ამოღებულ id-ს, რომლის მარშრუტიზაციაც `REGISTRY`-ს შეუძლია; `BUILT_IN_ALIASES`-ის ყველა სამიზნე წარმოდგენილია `REGISTRY`-ში და არ არის ექსპლუატაციიდან ამოღებული id-ების სნეპშოტში; `REGISTRY`-ში ჯერ კიდევ არსებული ყოველი ექსპლუატაციიდან ამოღებული id გადამისამართებულია ან ჩამოთვლილია `allowedRetiredInCatalog`-ში; და `DEFAULT_DEGRADATION_MAP`-ის არცერთი წყარო ან სამიზნე ამ სნეპშოტში ექსპლუატაციიდან ამოღებულად არ არის მონიშნული. ეს არ ამტკიცებს, რომ მოდელს ამჟამად ცოცხალი ზემდგომი სერვისი ემსახურება. ოფლაინ — შედარება ხდება `config/quality/model-lifecycle.json`-თან, რომელიც ხელით ახლდება `npm run quality:refresh-model-lifecycle`-ის მეშვეობით (საჭიროებს ქსელს; CI-ში ინტეგრირებული არ არის). `allowedRetiredInCatalog` კლებადი შემაკავებელი მექანიზმია: ჩანაწერი დაამატეთ მხოლოდ თვალთვალის issue-ს არსებობისას. | დიახ                                           |
| `check:fetch-targets`             | კლიენტის მხარეს არსებულ `src/`-ში ყოველი `fetch("/api/...")` რეალურ `route.ts`-ზე მიუთითებს                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | დიახ                                           |
| `check:deps`                      | რეპოზიტორიაში არსებული ყველა `package.json`-ის ყველა დამოკიდებულება, რომლის დაყენებაც `npm install`-ითაა შესაძლებელი, შეტანილია `dependency-allowlist.json`-ში; ახალი ვერსიაზე დაუფიქსირებელი ან slopsquatting-ის შედეგად დამატებული პაკეტები მონიშნულია                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | დიახ                                           |
| `audit:deps`                      | `npm audit` (ძირეული პროექტი + electron) — მაღალი/კრიტიკული დონის უსაფრთხოების შეტყობინებები არ არის (ნაწილობრივ ემთხვევა osv `check:vuln-ratchet`-ს; იხილეთ რაციონალიზაციის ბექლოგი)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | დიახ                                           |
| `check:lockfile`                  | `package-lock.json`-ის მთლიანობა — https რეესტრი, მთლიანობის ჰეშები, ჰოსტის გადაფარვების გარეშე                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | დიახ                                           |
| `check:licenses`                  | SPDX ლიცენზიების ნებადართული სია production დამოკიდებულებებისთვის                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | დიახ                                           |
| `check:tracked-artifacts`         | build არტეფაქტებისა და commit-ში დამატებული `node_modules` სიმბოლური ბმულების გარეშე (ასევე ეშვება husky-ის pre-commit-ზე; pre-push განზრახ მსუბუქია — #6716)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | დიახ                                           |
| `check:ai-attribution`            | PR-ის commit-ებში, სათაურსა ან აღწერაში AI/bot `Co-Authored-By` ტრეილერის ან AI-გენერაციის ქვედა კოლონტიტულის გარეშე — მკაცრი წესი #16 (`quality.yml`-ის სწრაფი შემოწმებების ციკლში PR→`release/**`-ისთვის — კითხულობს მოვლენის payload-ს და PR-ის გარეთ არაფერს აკეთებს — და მხოლოდ PR-ისთვის განკუთვნილი ნაბიჯი `ci.yml`-ის lint-ში PR→`main`-ისთვის; ასევე husky-ის `commit-msg` hook; ადამიან თანაავტორები დაშვებულია; #14436)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `check:vitest-exclusions`         | Vitest-ის თითოეული გამონაკლისი მიუთითებს თვალყურის დევნების issue-ს და წარმოდგენილია `config/quality/vitest-exclusions.json`-ში (#13204)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | დიახ                                           |
| `check:file-size`                 | საწყისი ფაილები (`.ts`/`.tsx` საქაღალდეებში `src/`, `open-sse/`, `electron/`, `bin/`) რჩება `cap`-ის, ხოლო სატესტო ფაილები (`*.test.ts(x)`) — `testCap`-ის ფარგლებში; `file-size-baseline.json`-ში გაყინილი ფაილები (`frozen` / `testFrozen`) არ უნდა გაიზარდოს მათთვის ჩაწერილ ზომაზე მეტად                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | დიახ                                           |
| `check:error-helper`              | შემსრულებლებში/დამმუშავებლებში შეცდომის პასუხები იყენებს `buildErrorBody()` / `sanitizeErrorMessage()` ფუნქციებს (მკაცრი წესი #12)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | დიახ                                           |
| `check:migration-numbering`       | მიგრაციის SQL ფაილები დანომრილია თანმიმდევრულად, გამოტოვებებისა და დუბლიკატების გარეშე                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | დიახ                                           |
| `check:public-creds`              | `publicCreds.ts`-ის გარეთ არ არის OAuth-ის ლიტერალური `client_id`/`client_secret` ან Firebase Web გასაღებები (მკაცრი წესი #11)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | დიახ                                           |
| `check:db-rules`                  | `src/lib/db/` მოდულების გარეთ არ არის დაუმუშავებელი SQL; `localDb.ts`-დან არ გამოიყენება გამაერთიანებელი იმპორტები (მკაცრი წესები #2/#5)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | დიახ                                           |
| `check:known-symbols`             | პროვაიდერის შემსრულებლები, მარშრუტიზაციის სტრატეგიები და მთარგმნელები, რომლებიც რეგისტრირებულია შესაბამის დისპეტჩერიზაციის ცხრილებში, ემთხვევა დისკზე არსებულ ფაილებს — არ არის განცალკევებული ან გამოუცხადებელი სიმბოლოები                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | დიახ                                           |
| `check:route-guard-membership`    | თითოეული მარშრუტი, რომელიც შვილობილ პროცესს ქმნის, კლასიფიცირებულია `isLocalOnlyPath()`-ის მიერ (მკაცრი წესები #15/#17)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | დიახ                                           |
| `check:test-discovery`            | საცავში არსებული ყოველი `*.test.ts` / `*.spec.ts` ფაილი შეგროვებულია სულ მცირე ერთი ტესტების გამშვების მიერ (რაჭეტი: `test-discovery-baseline.json`-ში არსებული ობოლი ფაილების სია მხოლოდ შეიძლება შემცირდეს)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | დიახ                                           |
| `check:agent-skills-sync`         | გენერირებული agent-skills არტეფაქტები შეესაბამება მათ საწყის კატალოგს (გადახრა არ არის)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `check:provider-asset-provenance` | პროვაიდერის ლოგოებს/აქტივებს აქვთ დაფიქსირებული წარმოშობის ჩანაწერი                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `lint:json`                       | JSON კონფიგურაციის ფაილები მუშავდება შეცდომის გარეშე და აკმაყოფილებს საცავის ლინტინგის წესებს                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `typecheck:core`                  | TypeScript-ის კომპილაცია შეცდომების გარეშე (მხოლოდ სარეკომენდაციო გაფრთხილებები)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | დიახ                                           |
| `typecheck:noimplicit:core`       | მკაცრი `noImplicitAny` — სამომავლო მიმართულება; მრავალ ადრე არსებულ გამოძახების ადგილს ჯერ კიდევ სჭირდება ანოტაციები                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | **სარეკომენდაციო** (`continue-on-error: true`) |
| `check:dashboard-typecheck`       | `tsc`, შემოფარგლული `src/app/(dashboard)/**`-ით (#7033) — `typecheck:core`-ის საგულდაგულოდ შერჩეული 27-ფაილიანი ნებადართული სია არ შეიცავს დაფის არცერთ TSX ფაილს, ხოლო `next build` მას ასევე არასდროს ამოწმებს ტიპებზე (`next.config.mjs`-ში მითითებულია `ignoreBuildErrors: true`), ამიტომ იქ არსებული მიუთითებელი იდენტიფიკატორების რეგრესიები (#6625/#6909) CI-სთვის უხილავი იყო. განსხვავებები მოწმდება გაყინული, თითოეული ფაილისა და თითოეული TS-კოდის რაოდენობის საბაზისო მაჩვენებელთან (`config/quality/dashboard-typecheck-baseline.json`, მოძველების კონტროლის იგივე ნიმუში, რაც `check:known-symbols`-შია) — კარიბჭის ჩავარდნას იწვევს მხოლოდ საბაზისო რაოდენობაზე მეტი ახალი შეცდომები; როდესაც ადრე არსებული შეცდომა გასწორდება, შეამცირეთ საბაზისო მაჩვენებელი `--update`-ით.                                                                                                                                                                                                                                                      | დიახ                                           |

### დავალება: `quality-gate`

ეშვება `test-coverage`-ის შემდეგ. წარუმატებლობის შემთხვევაში ბლოკავს შერწყმას.

| სკრიპტი                      | რას ამოწმებს                                                                                                                                                                                      | ბლოკირებადი                  |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| `quality:collect`            | ქმნის `quality-metrics.json`-ს (ESLint-ის გაფრთხილებების რაოდენობა, გაერთიანებული ფრაგმენტების ანგარიშიდან მიღებული დაფარვა)                                                                      | დიახ (ratchet-ის წინმსწრები) |
| `quality:ratchet`            | `quality-baseline.json`-ში მოცემული არცერთი მეტრიკა არ გაუარესებულა (ESLint-ის გაფრთხილებები ≤ საბაზისო მაჩვენებელს; დაფარვა ≥ საბაზისო მაჩვენებელს)                                              | დიახ                         |
| `check:duplication`          | კოდის დუბლირება (jscpd@4) არ აჭარბებს `quality-baseline.json`-ში მოცემულ საბაზისო მაჩვენებელს                                                                                                     | დიახ                         |
| `check:complexity`           | ფაილის დონის ციკლომატური სირთულე არ აჭარბებს ზღვარს (ძირითადი ESLint `complexity` + `max-lines-per-function`)                                                                                     | დიახ                         |
| `check:cognitive-complexity` | კოგნიტიური სირთულის ratchet (`eslint-plugin-sonarjs`) — ESLint-ის ცალკე გაშვება; CI ორივეს აერთიანებს ერთ `check:complexity-ratchets` ეტაპად                                                      | დიახ                         |
| `check:dead-code`            | გამოუყენებელი ექსპორტების / ფაილების ratchet (knip) არ გაუარესებულა საბაზისო მაჩვენებელთან შედარებით                                                                                              | დიახ                         |
| `check:compression-budget`   | შეკუმშვის ბენჩმარკის ბიუჯეტი — თითოეული ძრავისთვის ტოკენების ეკონომიის მინიმალური ზღვარი არ უნდა გაუარესდეს                                                                                       | დიახ                         |
| `check:type-coverage`        | ტიპიზაციის პროცენტული მაჩვენებლის ratchet (`type-coverage`) არ გაუარესებულა; ძირითადად მოიცავს `typecheck:noimplicit:core`-ს                                                                      | დიახ                         |
| `check:codeql-ratchet`       | ღია CodeQL გაფრთხილებების რაოდენობა არ გაუარესებულა (კითხულობს `gh api`-ის მეშვეობით; ტოკენის გარეშე კორექტულად გამოტოვებს) — განახლების სიხშირე და ხელით გაშვება: იხილეთ „CodeQL ratchet“ ქვემოთ | დიახ                         |

### დავალება: `quality-extended`

მთელი დავალება სარეკომენდაციო ხასიათისაა (`continue-on-error: true`). npm-ზე დაფუძნებული ratchet-ები
რეალურად ეშვება; გარე სკანერები ინსტალირდება `gh release download`-ის მეშვეობით და თავად
გამოტოვებენ შესრულებას (exit 0), თუ ბინარული ფაილი კვლავ არ არსებობს.

| სკრიპტი                  | რას ამოწმებს                                                                                                                                                                                                                                                          | ბლოკირებადი                                               |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| `check:circular-deps`    | ციკლური დამოკიდებულებები არ არსებობს (dpdm)                                                                                                                                                                                                                           | **სარეკომენდაციო**                                        |
| `check:bundle-size`      | პაკეტის ზომა არ აჭარბებს ზღვარს                                                                                                                                                                                                                                       | **სარეკომენდაციო**                                        |
| `check:secrets`          | საიდუმლო მონაცემების სკანირება (gitleaks) — გამოტოვებს, თუ ბინარული ფაილი არ არსებობს                                                                                                                                                                                 | **სარეკომენდაციო**                                        |
| `check:vuln-ratchet`     | დამოკიდებულებების მოწყვლადობები (osv-scanner) არ გაუარესებულა — გამოტოვებს, თუ ბინარული ფაილი არ არსებობს                                                                                                                                                             | **სარეკომენდაციო**                                        |
| `check:workflows`        | სამუშაო პროცესების ლინტინგი (actionlint + zizmor); არარსებული/გაუმართავი სკანერები, არასწორი ანგარიშები ან ratchet-ის არარსებული საბაზისო მაჩვენებელი იწვევს INCOMPLETE სტატუსით ჩავარდნას. ვალიდური მიგნებები მიჰყვება არჩეულ მკაცრ/სარეკომენდაციო/ratchet პოლიტიკას | შესრულება სავალდებულოა; zizmor ratchet ბლოკირებადია CI-ში |
| `check:openapi-breaking` | საჯარო API კონტრაქტში (`openapi.yaml`) შეუთავსებელი ცვლილებები საბაზისო შტოსთან შედარებით (oasdiff) — გამოაქვს `openapiBreaking=N`; გამოტოვებს, თუ oasdiff არ არსებობს ან საბაზისო სპეციფიკაცია ვერ მუშავდება                                                         | **სარეკომენდაციო**                                        |

### დავალება: `docs-sync-strict`

ეშვება `main`-ზე მიმართულ ყოველ PR-ზე. წარუმატებლობის შემთხვევაში ბლოკავს შერწყმას.

| სკრიპტი                        | რას ამოწმებს                                                                                                                                                                                    | ბლოკირებადი                |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| `check:docs-all`               | მეტა-ბარიერი, რომელიც ქვემოთ მოცემულ 6 ქვე-ბარიერს თანმიმდევრულად უშვებს                                                                                                                        | დიახ                       |
| ↳ `check:docs-sync`            | CHANGELOG-ის / OpenAPI-ის / llm.txt-ის ვერსიების შესაბამისობას                                                                                                                                  | დიახ                       |
| ↳ `check:docs-counts`          | ტექსტში მოცემული რაოდენობები (პროვაიდერების რაოდენობა, მიგრაციების რაოდენობა და ა.შ.) რეალური რაოდენობების ეტაპობრივი ზღვრის ფარგლებშია                                                         | დიახ                       |
| ↳ `check:env-doc-sync`         | `.env.example`-ში არსებული ყველა გარემოს ცვლადი დოკუმენტაციის ცხრილშია აღწერილი და პირიქით                                                                                                      | დიახ                       |
| ↳ `check:deprecated-versions`  | დოკუმენტაციაში მოძველებული ვერსიის სტრიქონები არ არის                                                                                                                                           | დიახ                       |
| ↳ `check:doc-links`            | დოკუმენტაციაში არსებული შიდა markdown-ბმულები რეალურ ფაილებზე მიუთითებს (`[text]`/`(path)` ფორმა)                                                                                               | დიახ                       |
| ↳ `check:fabricated-docs`      | დოკუმენტაციაში მითითებული მარშრუტები, გარემოს ცვლადები, CLI ბრძანებები, ჰუკების სახელები და ფაილების გზები კოდურ ბაზაში არსებობს. მკაცრი ბარიერი `--strict`-ით; ამ ალმის გარეშე შეცდომა რბილია. | დიახ (`--strict`-ით CI-ში) |
| `check:cli-i18n`               | CLI ბრძანებების სტრიქონები ყველა i18n ლოკალის ფაილშია წარმოდგენილი                                                                                                                              | დიახ                       |
| `check:openapi-coverage`       | OpenAPI-ის სპეციფიკაცია რეალური მარშრუტების, სულ მცირე, ეტაპობრივად დადგენილ მინიმუმს ფარავს                                                                                                    | დიახ                       |
| `check:openapi-security-tiers` | `openapi.yaml`-ში უსაფრთხოების დონეების ანოტაციები `routeGuard.ts`-ის კლასიფიკაციებთან შესაბამისობაშია                                                                                          | **სარეკომენდაციო**         |
| `check:openapi-routes`         | `openapi.yaml`-ში არსებული ყველა გზა რეალურ `route.ts`-ს შეესაბამება (ჰალუცინაციების საწინააღმდეგო შემოწმება)                                                                                   | დიახ                       |
| `check:docs-symbols`           | `docs/**/*.md`-ში არსებული ყველა `/api/...` მითითება რეალურ `route.ts`-ს შეესაბამება (ჰალუცინაციების საწინააღმდეგო შემოწმება)                                                                   | დიახ                       |
| `i18n translation drift`       | უთარგმნელი გასაღებები i18n ლოკალის ფაილებში — მხოლოდ გაფრთხილება                                                                                                                                | **სარეკომენდაციო**         |

### დავალება: `i18n-ui-coverage`

| სკრიპტი                               | რას ამოწმებს                                                                                                                                                                                                                     | ბლოკირებადი        |
| ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| `check-ui-keys-coverage` (ჩაშენებული) | UI-ის i18n გასაღებების დაფარვა ≥ 65%-ია                                                                                                                                                                                          | დიახ               |
| `check-ui-value-drift` (ჩაშენებული)   | გადაწერილი ინგლისური **მნიშვნელობა** მოძველებულ თარგმანს არ ტოვებს                                                                                                                                                               | დიახ               |
| `check-new-key-coverage` (ჩაშენებული) | **ახალი** ინგლისური გასაღები ყველა ლოკალზეა თარგმნილი — `__MISSING__:` მარკერი უარყოფილია                                                                                                                                        | დიახ               |
| `check-translation-ratio`             | რეალური თარგმანების თანაფარდობა თითოეული ლოკალისთვის (ინგლისურის იდენტური / ჩანაცვლებითი / გამოტოვებული ფოთლები დაშვებული სიის მიღმა) არ უნდა აღემატებოდეს `config/quality/i18n-translation-baseline.json` + დაშვებულ ცდომილებას | **სარეკომენდაციო** |

საჭიროებს `fetch-depth: 0`-ს — მნიშვნელობის ცვლილების ბარიერი `en.json`-ს გაერთიანების საბაზისო ვერსიასთან ადარებს.

#### `check-ui-value-drift` — მოძველებული თარგმანის ბარიერი

აფიქსირებს იმ ერთადერთ i18n რეგრესიას, რომელსაც სხვა ბარიერები სტრუქტურულად ვერ ხედავს: ინგლისური მნიშვნელობა
გადაიწერება, ხოლო _წინა_ ინგლისური ვერსიიდან მიღებული თარგმანები უცვლელი რჩება, რის გამოც
არაინგლისურენოვანი მომხმარებლები აგრძელებენ თავდაჯერებულად ფორმულირებული, მაგრამ უკვე მცდარი ტექსტის კითხვას.

ეს რეალურად მოხვდა გამოშვებულ ვერსიაში. `oauthModal.googleOAuthWarning` გადაიწერა, როდესაც Antigravity-ის
შესვლის დამხმარე დაემატა (#5203); **43 ლოკალიდან 39-ში** დარჩა ტექსტი, რომელიც ოპერატორებს ეუბნებოდა, რომ „სრული
URL დაეკოპირებინათ და ქვემოთ ჩაესვათ“ — პროცესი, რომელიც ამ პროვაიდერისთვის ვერ დასრულდება. ეს
#8463-მდე შეუმჩნეველი დარჩა, რადგან:

- `sync-ui-keys` მხოლოდ **არარსებულ** გასაღებებს ამატებს და არასდროს — **მოძველებულებს**;
- `check-ui-keys-coverage` გასაღების _არსებობას_ ითვლის, ამიტომ მოძველებული თარგმანი დაფარულად მიიჩნევა;
- `check-translation-drift` თვალყურს ადევნებს `docs/i18n/<locale>/**.md` დოკუმენტაციის ასლებს —
  ის არასდროს კითხულობს `src/i18n/messages/*.json`-ს. `docs-sync-strict` დავალებაში ბლოკირებადია
  2026-09 ხელახალი სინქრონიზაციის შემდეგ: შეცვალეთ ძირითადი დოკუმენტი → `npm run i18n:run -- --files=<doc>` (სექციის დონეზე, იაფი).

**ითვალისწინებს diff-ს და არ ეყრდნობა baseline-ს.** ის merge base-ში არსებულ `en.json`-ს ადარებს
სამუშაო ხეს; თითოეული გასაღებისთვის, რომლის ინგლისური მნიშვნელობაც შეიცვალა, მოძველებულად
მიიჩნევა ნებისმიერი ლოკალი, სადაც თარგმანი უცვლელი დარჩა. ეს განზრახ **აფიქსირებს უკვე არსებულ დავალიანებას** — diff-ით
შეუძლებელია დადგინდეს, ძველი ინგლისური ტექსტის რომელი ვერსიიდან მომდინარეობს დიდი ხნის წინ შექმნილი თარგმანი, ამიტომ შემოწმება
აფასებს მხოლოდ იმას, რასაც მიმდინარე ცვლილება ეხება. ალტერნატივა (თითოეული გასაღებისთვის hash baseline) მოითხოვდა
დაახლოებით 600 KB-ის გენერირებულ ფაილს, რაც ყველაზე დიდ არსებულ baseline-ზე 3-ჯერ მეტია და ყოველი i18n PR-ის დროს შეიცვლებოდა.

შემოწმების დასაკმაყოფილებლად ორი გზა არსებობს:

1. განაახლეთ შესაბამისი თარგმანები, ან
2. მიანიჭეთ მათ `__MISSING__:<new english>` — ამის შემდეგ runtime გასცემს შესწორებულ ინგლისურ ტექსტს
   (`src/i18n/request.ts::deepMergeFallback`, #7258), ხოლო გასაღები თარგმნის რიგში ჩადგება.

თუ სტრიქონის **მნიშვნელობა** შეიცვალა, უმჯობესია **გასაღებს სახელი შეუცვალოთ**: ახალი გასაღები
მოძველებულ თარგმანს ვერ მემკვიდრეობს. სწორედ ეს მიდგომა გამოიყენა #8463-მა.

```bash
npm run i18n:check-value-drift          # მკაცრი რეჟიმი (რასაც CI ასრულებს)
npm run i18n:check-value-drift:warn     # მხოლოდ ანგარიშის შექმნა
BASE_REF=origin/release/vX.Y.Z npm run i18n:check-value-drift
```

ბრძანება სრულდება 0 კოდით და `SKIP reason=base-unresolved` შეტყობინებით, როდესაც საბაზისო კატალოგის წაკითხვა შეუძლებელია (shallow
clone საბაზისო ref-ის გარეშე), `check-openapi-breaking`-ის ანალოგიურად.

### დავალება: `i18n`

i18n-ის ვალიდაციის სრული მატრიცა (თითო დავალება თითო ლოკალისთვის). მთელი დავალება სარეკომენდაციო ხასიათისაა.

| სკრიპტი                         | რას ამოწმებს                            | ბლოკავს                                                            |
| ------------------------------- | --------------------------------------- | ------------------------------------------------------------------ |
| `validate_translation.py quick` | თარგმანის სისრულეს თითოეული ლოკალისთვის | **სარეკომენდაციო** (`continue-on-error: true` მთელი დავალებისთვის) |

### დავალება: `pr-test-policy`

სრულდება მხოლოდ pull request-ებზე.

| სკრიპტი                | რას ამოწმებს                                                                                                                                    | ბლოკავს |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| `check:pr-test-policy` | PR-ები, რომლებიც ცვლიან production კოდს `src/`, `open-sse/`, `electron/` ან `bin/`-ში, უნდა შეიცავდნენ ან აახლებდნენ ტესტებს (მკაცრი წესი #8)   | დიახ    |
| `check:test-masking`   | შეცვლილი სატესტო ფაილები არ ამცირებენ assert-ების ჯამურ რაოდენობას და არ ამატებენ `assert.ok(true)` ტავტოლოგიებს                                | დიახ    |
| `check:pr-evidence`    | PR-ის აღწერა შეიცავს ცვლილების ტესტირების/VPS მტკიცებულებას (მკაცრი წესის #18 ავტომატიზაცია PR-ის ტექსტში ძიებით — არამდგრადია, იხილეთ Backlog) | დიახ    |

### დავალება: `test-vitest`

სრულდება `build`-ის შემდეგ. წარუმატებლობის შემთხვევაში merge იბლოკება.

| ნაკრები          | რას ამოწმებს                                                     | ბლოკავს                                                                                                                                |
| ---------------- | ---------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `test:vitest`    | MCP სერვერს (110 ხელსაწყო), autoCombo-ს, cache-ს — vitest runner | დიახ                                                                                                                                   |
| `test:vitest:ui` | UI კომპონენტების ტესტებს — vitest runner                         | **ბლოკავს** — უკვე არსებული წარუმატებელი ტესტები პირდაპირ გამორიცხულია `vitest.config.ts`-ში; ახალი წარუმატებლობები დავალებას ჩააგდებს |

### ღამის workflow-ები (დაგეგმილი, სარეკომენდაციო)

ისინი სრულდება cron განრიგით (და `workflow_dispatch`-ით), მაგრამ არასოდეს — PR-ებზე. ყველა მათგანი სარეკომენდაციო ხასიათისაა.

| Workflow               | რას ამოწმებს                                                                                                                                                                        | ბლოკავს            |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| `nightly-property`     | fast-check property ტესტებს შემთხვევითი seed-ითა და გაშვებების დიდი რაოდენობით                                                                                                      | **სარეკომენდაციო** |
| `nightly-resilience`   | heap-ის ზრდის ზღვარს, chaos fault-injection-ს, k6 load/soak ტესტებს                                                                                                                 | **სარეკომენდაციო** |
| `nightly-llm-security` | promptfoo-ს injection guard-ს (block რეჟიმი) + garak probes-ს (გამოტოვებულია provider-ის secret-ის გარეშე)                                                                          | **სარეკომენდაციო** |
| `nightly-schemathesis` | OpenAPI კონტრაქტის fuzzing-ს (schemathesis) გაშვებული OmniRoute-ის მიმართ, `docs/openapi.yaml`-ის გამოყენებით — ავლენს სპეციფიკაციის დარღვევებს / დაუმუშავებელ 500-ებს (ფაზა 8 B.4) | **სარეკომენდაციო** |
| `nightly-mutation`     | Stryker mutation-testing-ის შეფასებას სწრაფ unit lane-ზე — გადარჩენილი mutant-ები სუსტ assert-ებს ავლენს                                                                            | **სარეკომენდაციო** |
| `nightly-compat`       | Node engine-ის თავსებადობის მატრიცას მხარდაჭერილი `engines.node` დიაპაზონებისთვის                                                                                                   | **სარეკომენდაციო** |

წარმადობის baseline-ები (heap, TTFB, build-ის დრო) აღირიცხება, მაგრამ მათზე ზღვარი არ მოქმედებს: იხილეთ [`PERF_BASELINE.md`](../ops/PERF_BASELINE.md) (`npm run perf:lts-baseline`).

---

## სისწრაფის ფაზა (2026-08-30 → v4.0 LTS): ყველა საბაზისო ზღვარი 20%-ით შერბილდა

მფლობელის გადაწყვეტილება (2026-08-30): v4.0-ის მოდულარიზაციამდე გამოშვების სიჩქარე უფრო
მნიშვნელოვანია, ვიდრე ტექნიკური ვალის ზღვრის შენარჩუნება. ყველა **რიცხვითი** ratchet-ის საბაზისო ზღვარი
ერთ აუდიტირებად ოპერაციაში 20%-ით შერბილდა, ხოლო ფაზა გამოცხადებულია `config/quality/quality-baseline.json`-ში:

```json
"_policy": { "phase": "velocity", "since": "2026-08-30", "until": "4.0.0",
             "relaxPct": 20, "requireTighten": false }
```

| რა შეიცვალა                                                                                                                                                                                                            | სად                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| `metrics.*.value` — რაოდენობები, სადაც ნაკლები უკეთესია, ×1.2; პროცენტები, სადაც მეტი უკეთესია, ÷1.2 (დაფარვის მინიმუმი დარჩა 60, `eslintErrors` რჩება 0, `eslintWarnings` 0 → გაყინული გამონაკლისების რაოდენობის 20%) | `quality-baseline.json` (`_relax_velocity_2026_08_30` შენიშვნაში ჩამოთვლილია ყველა მნიშვნელობა „მანამდე → შემდეგ“) |
| `count` ×1.2 / `percentage` ×1.2                                                                                                                                                                                       | `complexity-baseline.json`, `duplication-baseline.json`                                                            |
| `cap`, `testCap`, ყველა `frozen[*]` / `testFrozen[*]` სტრიქონების ზღვარი ×1.2                                                                                                                                          | `file-size-baseline.json`                                                                                          |
| თითო ფაილის / თითო TS-კოდის რაოდენობები ×1.2                                                                                                                                                                           | `api-typecheck-baseline.json`, `dashboard-typecheck-baseline.json`, `open-sse-typecheck-baseline.json`             |
| `THRESHOLD` 36 → 30                                                                                                                                                                                                    | `scripts/check/check-openapi-coverage.mjs`                                                                         |
| `--require-tighten` ხდება სარეკომენდაციო, როდესაც `_policy.requireTighten === false`                                                                                                                                   | `scripts/quality/check-quality-ratchet.mjs`                                                                        |
| ღამის `bank-ratchet-shrinks` შეჩერებულია (ის გაზომილ შემცირებას დააფიქსირებდა და თავისუფალ მარაგს გააუქმებდა)                                                                                                          | `.github/workflows/nightly-release-green.yml`                                                                      |

დაშვებული სიები (`eslint-suppressions.json`, `test-masking-allowlist.json`, `test-discovery-baseline.json`,
…) **არ არის** ბიუჯეტები და მათ არ შეხებიან. გავლა/ჩავარდნის პოლიტიკის კარიბჭეები (საიდუმლო მონაცემები, SQL-ის წესები,
დოკუმენტაციის/გარემოს კონტრაქტი, i18n-ის პარიტეტი, ერთეულოვანი ტესტები) უცვლელია — წითელი ტესტი კვლავ წითელ ტესტად რჩება.

**ინსტრუმენტები**

- `npm run quality:relax-baselines -- --pct 20 --note velocity_YYYY_MM_DD [--dry-run]` — ერთჯერადი
  შერბილება (`scripts/quality/relax-baselines.mjs`); ერთი და იმავე შენიშვნით მეორედ გაშვებაზე უარს ამბობს.
- `npm run quality:headroom [-- --only deadExports,fileSize] [--json out.json --md out.md]` —
  ზომავს ყველა რიცხვით კარიბჭეს ზუსტად ისე, როგორც ამას CI აკეთებს, და თითოეული კარიბჭისთვის დარჩენილ მარაგს
  ბეჭდავს (`scripts/quality/baseline-headroom.mjs`). ღამის `baseline-headroom` დავალება ცხრილს აქვეყნებს
  სამუშაო პროცესის გაშვების შეჯამებაში და მის JSON/Markdown ანგარიშს ტვირთავს სახელით
  `baseline-headroom-<run_id>`, რომელიც 90 დღის განმავლობაში ინახება. გამაფრთხილებელი და კრიტიკული სტრიქონები
  მიუთითებს კარიბჭეებზე, რომლებიც თავიანთ ზღვართან 10%-ის ფარგლებშია ან უკვე გადაცილებული აქვს ის. ეს ანგარიშები
  განიხილეთ ბიუჯეტების ხარჯვის ადრეულ გაფრთხილებად; შეამოწმეთ პრობლემური კარიბჭის `_rebaseline_*` შენიშვნები.
  დავალება მუდმივ საკითხს აღარ ქმნის ან განაახლებს; #12149 ინახავს ადრინდელი ანგარიშების ისტორიას.

**ახალი კოდის რეჟიმი (Clean-as-You-Code) — 2026-08-30-დან, მხოლოდ PR-ის სწრაფი გზისთვის**

`pull_request` მოვლენებზე `quality.yml` გადასცემს `--base-ref <PR base SHA>` პარამეტრს
`check:file-size`, `check:complexity-ratchets` და `check:dead-code` ბრძანებებს. `check:complexity-ratchets`-ისა და
`check:dead-code`-ისთვის კარიბჭე HEAD-ს ადარებს merge-base-ს, **მხოლოდ PR-ის მიერ შეცვლილი ფაილების ფარგლებში**
(`scripts/check/newCodeMode.mjs`: merge-base მატერიალიზდება დროებით
`git worktree`-ში, ESLint/knip ეშვება როგორც იქ, ისე HEAD-ზე, შემდეგ კი თითოეული ფაილის რაოდენობები შედარდება):

- **დამბლოკავი** — PR-მა მის მიერ შეცვლილ ფაილებში დაამატა ციკლომატური/კოგნიტიური სირთულის დარღვევები ან მკვდარი ექსპორტები
  (ჟურნალში `complexityNewCode=`, `cognitiveComplexityNewCode=`, `deadExportsNewCode=`);
- **სარეკომენდაციო** — გლობალური ჯამი გაყინულ საბაზისო მნიშვნელობასთან შედარებით. მემკვიდრეობით მიღებული აცდენა
  უდანაშაულო PR-ს არასოდეს გააწითლებს; აცდენა ხელახლა იყინება გამოშვების შეჯერებისას და მას მარაგის დავალება აკვირდება.

`check:file-size` საბაზისო მითითებას საკუთარი წესებით იყენებს (`scripts/check/check-file-size.mjs`, #8522):
ის ამოწმებს ხეში არსებულ ყველა წყაროსა და სატესტო ფაილს, `git show`-ის მეშვეობით კითხულობს თითოეულის სტრიქონების
რაოდენობას PR-ის საბაზისო მდგომარეობაში და ფაილს მხოლოდ მაშინ აფუჭებს, როდესაც ის გადააჭარბებს მის საბაზისო ზედა
ზღვარს (`frozen` / `testFrozen`, ან `cap` / `testCap` საბაზისო სიაში არმყოფი ფაილისთვის) და მის საბაზისო ზომას შორის
უფრო დიდ მნიშვნელობას. შესაბამისად, ფაილი, რომელიც საბაზისო მდგომარეობაში უკვე აცდენილია, უდანაშაულო PR-ს არასოდეს გააწითლებს.

`check:boundary:ratchet` იმავე წესს იყენებს თავისი ერთადერთი რიცხვისთვის
(`scripts/quality/measure-boundary.mjs --ratchet --base-ref <sha>`): PR-ის მოვლენებზე როგორც
`quality.yml`-ის სწრაფი შემოწმებები, ისე `ci.yml`-ის lint დავალება გადასცემს PR-ის საბაზო SHA-ს, საბაზო commit იზომება
`git archive`-ის ექსპორტიდან, ხოლო PR ვერ გაივლის მხოლოდ მაშინ, როდესაც მისი `open-sse → src` წიბოების
რაოდენობა აღემატება `metrics.boundaryOpenSseToSrc`-სა და საბაზო ვერსიის რაოდენობას შორის უდიდესს. ზედა ზღვარზე
მაღალი საბაზო გადახრა აღირიცხება (`base drift herdado`), მაგრამ უდანაშაულო PR-ს არასდროს ჩააგდებს; push → main
ინარჩუნებს აბსოლუტურ ზედა ზღვარს, ხოლო საბაზო SHA-ს ვერ ამოცნობის შემთხვევაში გაფრთხილებით მასზე გადადის.

`workflow_dispatch`-ის გაშვებებს, release-green სრულ შემოწმებასა და ღამის headroom დავალებას PR-ის საბაზო ვერსია
არ გააჩნია და ისინი ინარჩუნებენ აბსოლუტურ (გლობალურ) შედარებას. დაფარვა, დუბლირება და ტიპებით დაფარვა ამჟამად
გლობალური რჩება (მათი ხელსაწყოები თითოეულ ფაილზე სხვაობას იაფად არ აგენერირებენ) — სამომავლოდ მათზეც იგივე მიდგომა შეიძლება გავრცელდეს.

**ფაზის დახურვა v4.0-ზე (LTS = წინანდელზე მკაცრი და არა „ჩვეულებრივ რეჟიმში დაბრუნება“)**

1. სუფთა `release/v4.0.0` tip-ზე: ჩანაწერისთვის გაუშვით `npm run quality:headroom --json`, შემდეგ
   `npm run quality:ratchet -- --update`, `check:file-size --update`,
   `check:complexity-ratchets --update`, `check:dead-code --update` და თითოეული typecheck შემოწმების
   `--update` — ყველა საბაზო მაჩვენებელი გაზომილ მნიშვნელობამდე დაიწევს.
2. წაშალეთ `_policy` ფაილიდან `quality-baseline.json` (ხელახლა ააქტიურებს `--require-tighten`-სა და ღამის
   რეზერვირებას), აღადგინეთ `THRESHOLD = 36` (ან უფრო მაღალი) ფაილში `check-openapi-coverage.mjs`.
3. გაამკაცრეთ გაზომილზე მეტად იქ, სადაც მოდულარიზაციამ შედეგი გამოიღო: file-size `cap` კვლავ 1000-მდე
   (ან 800-მდე), დაფარვის ქვედა ზღვრები +5, მკვდარი ექსპორტები 0 მოდულარიზებული პაკეტებისთვის.

## Ratchet-ის საბაზისო დონე (`quality-baseline.json`)

Ratchet-ის ძრავა (`scripts/quality/check-quality-ratchet.mjs`) კითხულობს `quality-baseline.json`-ს
და ადარებს მას ახლად შეგროვებულ `quality-metrics.json`-ს. ნებისმიერი მეტრიკა, რომელიც
მის epsilon-ზე მეტად გაუარესდება, აგების პროცესს წარუმატებლად დაასრულებს.

ამჟამად თვალყურისდევნებული მეტრიკები:

| მეტრიკა               | მიმართულება | მნიშვნელობა                                          |
| --------------------- | ----------- | ---------------------------------------------------- |
| `eslintWarnings`      | `down`      | ESLint-ის გაფრთხილებების რაოდენობა არ უნდა გაიზარდოს |
| `coverage.statements` | `up`        | ინსტრუქციების დაფარვა არ უნდა შემცირდეს              |
| `coverage.lines`      | `up`        | ხაზების დაფარვა არ უნდა შემცირდეს                    |
| `coverage.functions`  | `up`        | ფუნქციების დაფარვა არ უნდა შემცირდეს                 |
| `coverage.branches`   | `up`        | განშტოებების დაფარვა არ უნდა შემცირდეს               |

რეალური გაუმჯობესების შემდეგ საბაზისო დონის განახლებისთვის:

```bash
npm run quality:ratchet -- --update
git add quality-baseline.json
```

`--update` ალამი მიმდინარე გაზომილ მნიშვნელობებს `quality-baseline.json`-ში წერს.
ეს ფაილი დააკომიტეთ იმ ცვლილებასთან ერთად, რომელმაც მეტრიკა გააუმჯობესა. PR, რომელიც
მეტრიკას საბაზისო დონის განახლების გარეშე აუმჯობესებს, გამოვლინდება `--require-tighten`-ის მიერ (ფაზა 6A.5,
განხორციელება მოსალოდნელია).

### CodeQL ratchet: განახლების პერიოდულობა და ხელით გაშვება

`check:codeql-ratchet` კითხულობს **რეპოზიტორიის მდგომარეობას, რომელიც გრაფიკის მიხედვით ახლდება — არა თითოეულ PR-ზე.**
`gh api repos/diegosouzapw/OmniRoute/code-scanning/default-setup` აბრუნებს
`state: configured`, `schedule: weekly`: ეს არის GitHub-ის ნაგულისხმევი კონფიგურაციის სკანირება და არა
ყოველი push-ის ანალიზი. შედეგი: გაფრთხილებების გამომასწორებელი PR-ის გაერთიანების შემდეგ ratchet განაგრძობს
ძველი, უფრო მაღალი რაოდენობის კითხვას მომდევნო დაგეგმილი სკანირების გაშვებამდე — ამიტომ ის რეგრესიას აფიქსირებს
ყველა ღია PR-ზე, მათ შორის გამომასწორებელი PR-ის შემდგომ ცვლილებებზეც, სანამ სკანირება მიმდინარე მდგომარეობას არ დაეწევა.

**ხელით განახლება**: `gh workflow run codeql.yml --ref release/vX.Y.Z` ხელახლა უშვებს
ანალიზს და რამდენიმე წუთში თავიდან აქვეყნებს გაფრთხილებებს. ჯერ წაიკითხეთ `.github/workflows/codeql.yml` —
მის სათაურში განმარტებულია, რომ ის მხოლოდ `workflow_dispatch`-ისთვისაა განკუთვნილი, **რადგან კონფლიქტშია
GitHub-ის „ნაგულისხმევ კონფიგურაციასთან“** (`CodeQL analyses from advanced configurations cannot be
processed when the default setup is enabled`). `push`/`pull_request`/
`schedule` ტრიგერების აღდგენამდე აუცილებელია **მფლობელის მოქმედება**: Settings → Code security →
CodeQL: Default → Advanced. ამ გადართვის გარეშე არ დაამატოთ `schedule:` ტრიგერი — ის
მხოლოდ წარუმატებელ გაშვებებს გამოიწვევს.

**რაოდენობის შემცირების შემდეგ გაამკაცრეთ საბაზისო დონე** — `node scripts/check/check-codeql-ratchet.mjs
--update` ახალ გაზომილ რაოდენობას წერს `quality-baseline.json`-ში →
`metrics.codeqlAlerts.value`, რათა ratchet-მა ჩუმად არ დაუშვას რეგრესია ძველ ზედა ზღვრამდე.
პრაქტიკული მაგალითი (2026-09-02/03): PR #12502-მა გამოასწორა 7 რეალური გაფრთხილება
(13 → 6 გაზომილი ღია გაფრთხილება); PR #12530-მა გაყინული საბაზისო დონე 11-დან 6-მდე გაამკაცრა შესაბამისობისთვის;
შემდეგ დარჩენილი 6 გაფრთხილება თითოეული გაფრთხილებისთვის მითითებული დასაბუთებით უარყოფილ იქნა, რის შედეგადაც ღია გაფრთხილებების რაოდენობა 0-მდე შემცირდა.

**უარყოფა ოპერატორის გადასაწყვეტია (მკაცრი წესი #14)** — არასოდეს უარყოთ CodeQL-ის გაფრთხილება
უარყოფის კომენტარში ტექნიკური დასაბუთების ჩაწერის გარეშე: `won't fix` ზედა დონის პროტოკოლის მოთხოვნისთვის,
`used in tests` სატესტო ფიქსტურისთვის, `false positive` იმ სანიტაიზერისთვის, რომელსაც CodeQL ვერ ხედავს
(პრეცედენტი: `docs/security/ERROR_SANITIZATION.md`).

---

## ტესტების ხელახალი გაშვების პოლიტიკა (WS5.4, v3.8.49)

ხელახალი გაშვების პოლიტიკა განისაზღვრება თითოეული runner-ისთვის და არასდროს მოქმედებს გლობალურად — საყოველთაო ხელახალი გაშვება რეალურ რეგრესიებს
უხილავ არასტაბილურობად აქცევს:

| Runner           | პოლიტიკა                                                                                                                                                                  | მიზეზი                                                                                                                                              |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| Playwright (e2e) | `retries: 1` მხოლოდ CI-ში, `trace: on-first-retry`-სთან ერთად                                                                                                             | ბრაუზერის/ქსელის დროითი ქცევა ნამდვილად არადეტერმინისტულია; ერთი ხელახალი გაშვება, კვალის ჩაწერით, არასტაბილურობას დიაგნოსტირებად არტეფაქტად აქცევს |
| Vitest           | გლობალური ხელახალი გაშვება აკრძალულია. დადასტურებულად არასტაბილური ტესტი იღებს აშკარა, კონკრეტული ტესტისთვის განკუთვნილ ხელახალ გაშვებას (ჩანს diff-ში და მოწმდება PR-ში) | საკარანტინო სია ინახება repo-ში და არასდროს არის გაუმჭვირვალე                                                                                       |
| node:test (unit) | ხელახალი გაშვება ყოველთვის აკრძალულია                                                                                                                                     | არასტაბილური unit-ტესტი თავად ტესტის შეცდომაა — გაასწორეთ და ხელახლა შემთხვევით შედეგზე ნუ დაეყრდნობით                                              |

სამიზნე SLO-ები არასტაბილურობის ტელემეტრიის დანერგვის შემდეგ (WS5.2/5.3): თითოეულ ტესტზე არასტაბილურობის სიხშირე <1%
(„ახლავე გასწორების“ ზღვარი), თითოეულ pipeline-ზე წარმატების მაჩვენებელი ≥95%. ინდუსტრიის საორიენტაციო მნიშვნელობებია —
ხელახლა დააკალიბრეთ ჩვენი საკუთარი გაზომვების მიხედვით.

## Release-ის დონის Ratchet-ის გადახრა (WS5.5, v3.8.49)

როდესაც ratchet (ფაილის ზომა, სირთულე, eslint-ის გაფრთხილებები) რეგრესირებს release-ის სუფთა
წვერზე — ანუ merge-ების კომბინაციამ გამოიწვია რეგრესია და არცერთი ცალკეული PR არ იმეორებს
რეგრესიას საკუთარ branch-ზე — გამოსწორება ეკუთვნის **release captain-ს, ერთხელ, release
branch-ზე**: უპირატესობა მიანიჭეთ გამოყოფას/რეფაქტორინგს; საბაზისო მნიშვნელობა ხელახლა დააყენეთ მხოლოდ დოკუმენტირებული
დასაბუთების ჩანაწერით. არასდროს გადააკისროთ კომბინაციური გადახრა contributor-ის PR-ს და არასდროს
განაახლოთ საბაზისო მნიშვნელობა თითოეული PR-ისთვის (ეს რეალურ რეგრესიებს მალავს). ჯერ განასხვავეთ მიზეზები: სანამ ჩათვლით, რომ პრობლემა თქვენმა PR-მა გამოიწვია,
წითელი შედეგი probe worktree-ში, სუფთა წვერის მიმართ გაიმეორეთ.

## Ratchet-ის შემცირებების დაფიქსირება — დაღმავალი მიმართულება (#8584)

Ratchet მხოლოდ სანახევროდ არის ავტომატიზებული და თანაც არასწორი ნახევარია. ზღვრის **გაზრდა**
JSON-ის ხელით, ათწამიანი რედაქტირებაა და წითელი PR-ის განბლოკვის უსწრაფესი გზა.
ზღვრის **შემცირება** მოითხოვს, რომ ვინმემ გაუშვას `--update` და შედეგი commit-ში შეიტანოს — ხოლო
`bank-ratchet-shrinks` job-ის დანერგვამდე ამას არცერთი workflow არ ასრულებდა. გაზომილი შედეგი
(2026-07-25): 18 გაყინული ფაილი უკვე 800-სტრიქონიანი ახალი ფაილის ზღვარზე ან მის ქვემოთ იყო, ყველაზე უარესი
132×-ით (`src/shared/validation/schemas.ts`, 19 სტრიქონი 2,523-იანი ზღვრით);
სირთულის ზედა ზღვარი დაახლოებით 37 ხელახალი საბაზისო მნიშვნელობის შენიშვნის განმავლობაში `1794 → 2169`-მდე გაიზარდა, ზუსტად ერთი
შემცირებით (−1); ხოლო ფრაზა „შემდეგ ციკლში `--update`-ით გამკაცრება“ 31-ჯერ დაიწერა და
ერთხელ შესრულდა. ზღვარი, რომელიც მის გამომწვევ კოდზე დიდხანს ცოცხლობს, თითოეულ დასრულებულ
დეკომპოზიციას ჩუმად აქცევს ზრდის ნებართვად იმისთვის, ვინც შემდეგში ფაილს დაარედაქტირებს.

`nightly-release-green.yml` → job **`bank-ratchet-shrinks`** ამ ციკლს ხურავს:

|          |                                                                                                                    |
| -------- | ------------------------------------------------------------------------------------------------------------------ |
| ეშვება   | `schedule`-ით (დღეში 3×) + `workflow_dispatch` — განზრახ **არა** `push`-ით                                         |
| ზომავს   | უმაღლეს `release/vX.Y.Z`-ს, იმავე resolution + injection guard-ით, რომლებსაც `release-green` იყენებს               |
| წერს     | `check:file-size --update` და `check:complexity-ratchets --update` (ორივე კონსტრუქციულად მხოლოდ შემცირებას ახდენს) |
| ამოწმებს | `npm run check:ratchet-bank` (`scripts/quality/verify-ratchet-bank.mjs`)                                           |
| აგზავნის | ერთ, ყოველთვის აქტუალურ PR-ს release branch-ის მიმართ — იძულებით განახლებადს და არასდროს სპამირებულს               |

შემცირებების დაფიქსირება თითოეული push-ის ნაცვლად პაკეტურად ხდება, რადგან მას დაყოვნების მოთხოვნა არ აქვს (შემცირების
8 საათში დაფიქსირება მისაღებია), ხოლო თითოეულ merge-ზე გაშვება merge-კამპანიების დროს PR branch-ს განმეორებით
ააწყობდა და ყოველ ჯერზე ESLint-ის სრული გავლის ღირებულებას წარმოშობდა. აღმოჩენა კვლავ push-ზე ხდება
(`release-green`); მხოლოდ შემცირებების დაფიქსირება სრულდება პაკეტურად.

### უსაფრთხოების შემმოწმებელი

job საბაზისო მნიშვნელობებში ზედამხედველობის გარეშე წერს, ამიტომ სწორედ `verify-ratchet-bank.mjs` ხდის
ამას მისაღებს. ის `--update`-ის შემდგომ tree-ს `HEAD`-თან ადარებს და **job-ს მანამდე წყვეტს,
სანამ რაიმე commit შეიქმნება** — ყოველგვარი PR-ის გახსნის გარეშე — თუ ყველა ცვლილება ქვემოთ ჩამოთვლილთაგან ერთ-ერთი არ არის:

- `frozen` / `testFrozen`-ის რიცხვითი ჩანაწერი **შემცირებულია** ან **წაშლილია**
- `complexity-baseline.json` → `count` **შემცირებულია**
- `quality-baseline.json` → `metrics.cognitiveComplexity.value` **შემცირებულია**

ნებისმიერი სხვა რამ შეცდომით სრულდება: რიცხვის გაზრდა, ჩანაწერის დამატება, `cap`/`testCap`-ის შეცვლა ან
`_rebaseline_*` შენიშვნის წაშლა/გადაწერა (ეს შენიშვნები წარმოადგენს თითოეული
ზღვრის არსებობის მიზეზის აუდიტის კვალს და ინახება იმავე `frozen` ობიექტში, სადაც ფაილების ჩანაწერებია).
ბოტი, რომელსაც ზღვრის გაზრდა შეეძლებოდა, არსებულ მდგომარეობაზე მნიშვნელოვნად უარესი იქნებოდა. რეგრესიისგან
დაცვა: `tests/unit/verify-ratchet-bank.test.ts`.

job არასდროს ასრულებს push-ს `release/*`-ში — PR-ს ადამიანი აერთიანებს, ამიტომ მცდარი გაზომვა
შემოწმების გარეშე ვერ მოხვდება სისტემაში.

## დაშვებული გამონაკლისების სიის პოლიტიკა

ყველა შემოწმება, რომელიც უკვე არსებული დარღვევების გამო არ უნდა ჩავარდეს, იყენებს გაყინულ დაშვებული გამონაკლისების სიას
(მაგ., `KNOWN_STALE_DOC_REFS`, `KNOWN_MISSING`, `KNOWN_RAW_SQL`). პოლიტიკა ასეთია:

**გამოასწორეთ ძირეული მიზეზი; დაშვებული გამონაკლისების სია გამოიყენეთ მხოლოდ მაშინ, როდესაც დარღვევა უკვე არსებობდა და
მისი გამოსწორება იმავე PR-ში შეუძლებელია.**

დაშვებული გამონაკლისების სიაში ჩანაწერის დამატებისას:

1. დაამატეთ კომენტარი დასაბუთებით.
2. მიუთითეთ თვალყურის დევნების საკითხი (მაგ., `// #3498 — მე-2 ფაზის ფუნქცია, ჯერ არ არის განხორციელებული`).
3. ჩანაწერი წაშალეთ იმავე PR-ში, რომელიც დარღვევას ასწორებს — მოძველებული ჩანაწერი, რომელიც აქტიურ დარღვევას აღარ
   უგულებელყოფს, თავადაც დეფექტია (6A.3-ის მოძველებული წესების შემოწმება, განხორციელების შემდეგ,
   დაკავშირებული დარღვევის გარეშე დარჩენილი დაშვებული გამონაკლისების სიის ჩანაწერის გამო შემოწმებას ჩააგდებს).

**არ** დაამატოთ ჩანაწერები დაშვებული გამონაკლისების სიაში მხოლოდ იმისთვის, რომ ტესტები უფრო სწრაფად გაიაროს. წარმატებული შემოწმება მზარდი
დაშვებული გამონაკლისების სიით ხარისხის ცრუ შეგრძნებას ქმნის.

### როდესაც თქვენს PR-ზე შემოწმება ვერ გაივლის

1. **ყურადღებით წაიკითხეთ შემოწმების შედეგი** — ის ზუსტად გეტყვით, რომელმა ფაილმა ან სიმბოლომ დაარღვია
   წესი.
2. **გამოასწორეთ დარღვევა** — შემოწმებების უმეტესობა ფაილური სისტემის დეტერმინისტული შემოწმებაა და კოდის
   გასწორებისთანავე წარმატებით სრულდება.
3. **თუ დარღვევა უკვე არსებობდა** (ანუ ის თქვენ არ დაგიმატებიათ, მაგრამ ახლა შემოწმება მასაც მოიცავს):
   დაშვებული გამონაკლისების სიაში დაამატეთ ჩანაწერი დასაბუთების კომენტარითა და თვალყურის დევნების საკითხის მითითებით.
4. **თუ შემოწმება ზღვრული მაჩვენებლის პრინციპით მუშაობს** (დაფარვა, ESLint-ის გაფრთხილებები, დუბლირება, სირთულე):
   თქვენმა ცვლილებამ მეტრიკა გააუარესა. გამოასწორეთ ძირეული პრობლემა ან (იშვიათად) გაუშვით
   `npm run quality:ratchet -- --update`, თუ ცვლილება მიზანმიმართულია და მეტრიკის
   გაუარესება მისაღებია — თუმცა PR-ის აღწერაში მიუთითეთ მიზეზი.
5. **სარეკომენდაციო შემოწმებები** (`continue-on-error: true`) საინფორმაციო ხასიათისაა — ისინი შერწყმას არ
   ბლოკავს, თუმცა CI-ის შეჯამებაში გამოჩნდება. ამის მიუხედავად, ისინიც გამოასწორეთ.

---

## ახალი შემოწმების დამატება

1. შექმენით `scripts/check/check-<name>.mjs` (ან `.ts`). პოლიტიკის შემოწმებები სრულდება 0/1 კოდით.
   ზღვრული მაჩვენებლის ტიპის შემოწმებები მეტრიკას `collect-metrics.mjs`-ის მეშვეობით `quality-metrics.json`-ში წერენ.
2. `package.json`-ში დაამატეთ `"check:<name>": "node scripts/check/check-<name>.mjs"`.
3. დააკავშირეთ ის `.github/workflows/ci.yml`-ში, შესაბამის დავალებაში
   (პოლიტიკა → `lint` ან `docs-sync-strict`; ზღვრული მაჩვენებელი → `quality-gate`).
4. თუ მას დაშვებული გამონაკლისების სია აქვს, გამოიყენეთ `reportStaleEntries()` ფაილიდან
   `scripts/check/lib/allowlist.mjs`, რათა მოძველებული ჩანაწერები ავტომატურად გამოვლინდეს.
5. `tests/unit/build/`-ში დაწერეთ ტესტი, რომელიც შემოწმების გამოვლენის ლოგიკას მოიცავს.
6. განაახლეთ ეს დოკუმენტი (შესაბამისი დავალების ცხრილს დაამატეთ სტრიქონი).

---

## აგენტის ხელსაწყოები: LSP-in-the-loop (არჩევითი)

CI-ის შემოწმებების გარდა, OmniRoute-ს მოჰყვება **არჩევითი** `agent-lsp`-ის საწყისი სტრუქტურა
(პროექტის დონის `.mcp.json`, Fase 7 Task 15). შექმენით `.mcp.json`,
რათა კოდის დამწერ აგენტებს TypeScript-ის ენის სერვერზე წვდომა მისცეთ და მათ კოდის დაწერამდე
ამოხსნან სიმბოლოები / დიაგნოსტიკა — `typecheck:core`-ის კომპილაცია-მტკიცებამდე მიდგომის თანამგზავრი,
რომელიც „გამოგონილი სიმბოლოების“ შეცდომებს წყაროშივე ამცირებს. ის განზრახ არ იტვირთება
ავტომატურად (MCP↔LSP ხიდს თავად ირჩევთ და ამოწმებთ); გაუმართავი ჩანაწერი მხოლოდ
კავშირის შეცდომას აღრიცხავს და სესიებს არასოდეს არღვევს.

---

## რაციონალიზაციის ბექლოგი (ROI-ის მიმოხილვა — ფაზა 9, ტალღა 3)

ეს ინვენტარი შეჯერებულია `ci.yml`-თან 2026-06-17-ს (წინა ვერსიაში გამოტოვებული იყო
`audit:deps`, `check:tracked-artifacts`, `check:lockfile`, `check:licenses`,
`check:dead-code`, `check:cognitive-complexity`, `check:type-coverage`,
`check:codeql-ratchet`, `check:pr-evidence`). შეჯერებული ნაკრების ROI-ის მიმოხილვამ
გამოავლინა რაციონალიზაციის შემდეგი კანდიდატები. **გაერთიანებები CI-ის მექანიკური
ცვლილებებია; გადართვა/ამოღება კი პოლიტიკის გადაწყვეტილებებია, რომლებიც ოპერატორს ეკუთვნის.** ქვემოთ
ჩამოთვლილთაგან ჯერ არაფერი გამოყენებულა.

**ზემოთ ასევე არ არის დოკუმენტირებული** (სარეკომენდაციო, დაბალი სიგნალის მქონე): `docs-lint` დავალება
(markdownlint + Vale, მთელ დავალებაზე `continue-on-error`) და დამოუკიდებელი სკანერის სამუშაო პროცესები
`semgrep.yml` / `codeql.yml` / `scorecard.yml`. `semgrepFindings: 0` არის
`quality-baseline.json`-ში, თუმცა `ci.yml`-ში ბლოკირების მექანიზმის მქონე რეჩეტთან დაკავშირებული არ არის — მეტრიკა
ამჟამად ობლადაა დარჩენილი.

### გაერთიანება / დუბლირების მოცილება (მექანიკური, ნაკლები რისკი)

თითოეული კანდიდატი შემოწმდა აქტიური გეიტების მდგომარეობასთან 2026-06-17-ს (ენდე, მაგრამ გადაამოწმე);
რამდენიმე „აშკარა“ გაერთიანება რეალურად დამალულ ტექნიკურ ვალს შეიცავდა და **არ არის** პირდაპირი უსაფრთხო ჩანაცვლება.

- **`check:docs-sync` ორჯერ ეშვება** — ცალკე `lint` დავალებაში და კვლავ `check:docs-all`-ის (`docs-sync-strict`) შიგნით და husky-ის pre-commit ჰუკში. ✅ **შესრულებულია** — ცალკეული `lint` გამოძახება ამოღებულია.
- **CVE სკანირება** — ❌ **არ არის სუფთა გაერთიანება.** `audit:deps` იწვევს მკაცრ ჩავარდნას ნებისმიერ მაღალი/კრიტიკული სიმძიმის CVE-ზე; `check:vuln-ratchet` (osv) კი მხოლოდ საბაზისო დონესთან შედარებით _გაუარესების_ შემთხვევაში ვარდება (ამჟამად 1 MODERATE). სემანტიკა განსხვავებულია — `audit:deps`-ის ამოღებით დაიკარგებოდა მაღალი/კრიტიკული სიმძიმის აბსოლუტური გეიტი. ორივე უნდა დარჩეს.
- **ციკლების აღმოჩენა** — ✅ **შესრულებულია** (#15159 G-01/G-02). ძველ ტექსტში `check:cycles` აღწერილი იყო, როგორც „მწვანე, კურირებული“ გეიტი და მისი ბლოკირებად დატოვება იმით იყო გამართლებული, რომ `check:circular-deps` (dpdm) 91 ციკლს აფიქსირებდა. ეს მწვანე სტატუსი **ცრუ დადებითი შედეგი** იყო: `check:cycles` ასკანირებდა 5 ქვედირექტორიას (450 ფაილს), ამთხვევდა მხოლოდ სტატიკურ `import|export … from` კონსტრუქციებს და უგულებელყოფდა ყველა `@/` და `@omniroute/open-sse/` სპეციფიკატორს, ამიტომ ვერ ხედავდა დინამიკური იმპორტისა და ფსევდონიმების ციკლებს, რომლებიც რეპოზიტორიაში ჭარბობდა. გასწორებულია: ახლა გეიტი სრულად გადის `src` + `open-sse`-ზე (5023 ფაილი), სპეციფიკატორებს TypeScript AST-იდან აგროვებს (ამიტომ `import("…")` ითვლება, ხოლო ტიპის პოზიციაში არსებული `typeof import("…")` — არა) და ხსნის tsconfig-ის `paths`-ს. ის პოულობს **14** ციკლს და არა 0-ს. რადგან მანამდე არსებული 14 ციკლის გასწორება გეიტის PR-ში შეუძლებელია, `check:cycles` ახლა **რეჩეტია** (`--ratchet`, ზედა ზღვარი `metrics.cycles.value = 14` ფაილში `quality-baseline.json`, `direction: down`) — ის ბლოკავს ნებისმიერ _გაუარესებას_ და რაოდენობა მხოლოდ შემცირდება. CI უშვებს `npm run check:cycles:ratchet`-ს. ეტაპობრივი შემცირება მიმდინარეობს **A-01**-თან ერთად. `check:circular-deps` (dpdm) რჩება სარეკომენდაციო რეჟიმში, როგორც უფრო ფართო მეორე შეფასება.
- **სირთულე** — ✅ **შესრულებულია** (`check:complexity-ratchets` / `eslint.complexity-ratchets.config.mjs`): ESLint-ის ერთი გავლა, დათვლა ruleId-ის მიხედვით, რათა ციკლომატური სირთულის+max-lines-ისა და კოგნიტიური სირთულის საბაზისო მნიშვნელობები დამოუკიდებელი დარჩეს; ცალკეული `check:complexity` / `check:cognitive-complexity` შენარჩუნებულია ლოკალური `--update`-ისთვის.
- **`/api`-ის ანტიჰალუცინაციური შემოწმება** — ✅ **შესრულებულია** (`check:api-docs-refs` + `scripts/check/lib/apiRoutes.mjs`): `src/app/api`-ის ფაილური სისტემის ერთი ინვენტარიზაცია, openapi-routes + docs-symbols კვლავ დამოუკიდებლად ქმნის ანგარიშებს; ცალკეული შემოწმებები შენარჩუნებულია ლოკალური გაშვებებისთვის.
- **`check:node-runtime` 11 დავალებაში ეშვება** — ⚠️ **დაბალი ROI.** თითოეული მათგანი ცალკე რანერია, ხოლო შემოწმებას <1 წმ სჭირდება; ჯამური დანაზოგი დაახლოებით 10 წმ-ია, სანაცვლოდ კი იკარგება იაფი, თითოეულ დავალებაზე მოქმედი დამცავი შემოწმება. ცვლილებით გამოწვეულ აურზაურად არ ღირს.
- **`typecheck:noimplicit:core` CI-ის lint-ზე** — ✅ **ამოღებულია lint დავალებიდან** (იყო სარეკომენდაციო `continue-on-error`); ტიპების ზედაპირის ბლოკირებადი შემოწმებაა `typecheck:core` + `check:type-coverage`. ლოკალური სკრიპტი შენარჩუნებულია.

### გადართვა / გადაწყვეტილების მიღება (ოპერატორის პოლიტიკა)

- `check:openapi-security-tiers` (სარეკომენდაციო) — ❌ **პირდაპირ გადართვა შეუძლებელია.** ის აბრუნებს 0-ს, თუმცა აფრთხილებს, რომ `LOCAL_ONLY_API_PREFIXES`-ის ქვეშ არსებული რამდენიმე `traffic-inspector` მარშრუტი არ შეიცავს `x-loopback-only: true` ანოტაციას. მის სავალდებულოდ ქცევამდე ეს ანოტაციები ჯერ `openapi.yaml`-ს უნდა დაემატოს.
- `typecheck:noimplicit:core` (სარეკომენდაციო) — ძირითადად ჩანაცვლებულია ბლოკირებადი `check:type-coverage` რეჩეტით. გადართეთ რეჩეტზე ან ამოიღეთ ზედმეტი მეორე `tsc` გავლა.
- `test:vitest:ui` (ახლა **ბლოკირებადია**) — მანამდე არსებული ჩავარდნები პირდაპირაა გამორიცხული `vitest.config.ts`-ში `// #8618` თვალთვალის კომენტარებით; ახალი ჩავარდნები დავალებას ჩააგდებს.
- `check:secrets` (gitleaks, ბლოკირებადი რეჩეტი, გაყინული 3 დოკუმენტირებულ ცრუ დადებით შედეგზე) — დაამატეთ ეს 3 დაშვებულთა სიაში, რათა მაჩვენებელი 0-მდე ჩამოვიდეს, ან გადაიყვანეთ სარეკომენდაციო რეჟიმში. ნაწილობრივ ემთხვევა GitHub-ის ჩაშენებულ საიდუმლოების სკანირებასა და `check:public-creds`-ს.
- `check:pr-evidence` (ბლოკირებადი, PR-ის ტექსტურ აღწერაში grep-ით ეძებს) — ცრუ დადებითი შედეგების მაღალი რისკი; მისი ამოღება ასუსტებს მკაცრი წესის #18 აღსრულებას, ამიტომ ეს ნამდვილად პოლიტიკის საკითხია.
- `semgrep` (სარეკომენდაციო დამოუკიდებელი შემოწმება) — OWASP-ის კატეგორიებისთვის ნაწილობრივ ემთხვევა CodeQL-ს; დაუკავშირეთ მისი საბაზისო მნიშვნელობა რეჩეტს ან ამოიღეთ.

---

## დაკავშირებული დოკუმენტაცია

- მიწოდების ჯაჭვი (წარმოშობა, SBOM, Trivy, Scorecard): [`docs/security/SUPPLY_CHAIN.md`](../security/SUPPLY_CHAIN.md)

#### `check-key-completeness` — გასაღებების სიმრავლეთა თანხვედრის ბარიერი

`scripts/i18n/check-key-completeness.mjs` (`npm run i18n:check-keys`, დავალება `i18n-ui-coverage`).
ადარებს თითოეული `src/i18n/messages/<locale>.json`-ის ბოლო დონის გასაღებთა სიმრავლეს `en.json`-თან და
ნებისმიერი გამოტოვებული ან ზედმეტი ბოლო დონის გასაღების აღმოჩენისას მარცხდება, მიუხედავად იმისა, როდის დაემატა გასაღები. `__MISSING__:` ჩანაცვლების ნიშნები
არსებულად ითვლება (მათი შიგთავსი თანაფარდობის ბარიერის საზრუნავია). ეს არის ორ, diff-ზე დაფუძნებულ/პროცენტულ ბარიერთა აბსოლუტური შემავსებელი:
`check-ui-keys-coverage` თითოეული ლოკალისთვის მინიმალურ ზღვარს 80 %-ზე აწესებს
(~13,000-დან 43 გამოტოვებული გასაღების შემთხვევაშიც მაჩვენებელი კვლავ 99.7 %-ია), ხოლო `check-new-key-coverage` აფასებს
მხოლოდ იმ გასაღებებს, რომლებსაც PR `en.json`-ს ამატებს. ლოკალების პაკეტი გენერირდება იმ დღის `en.json`-იდან,
როდესაც მისი განშტოება იქმნება, და თარგმნა დღეების განმავლობაში გრძელდება, მაშინ როცა საბაზისო განშტოებას ახალი გასაღებები ემატება; პაკეტის PR თავად
არცერთ გასაღებს არ ამატებს, ამიტომ ორივე მონათესავე შემოწმება ჩუმად დარჩა, როდესაც პაკეტი 1 (#13044) ცხრა
ლოკალში 43 გასაღების დანაკლისით, ხოლო პაკეტი 2 (#13660) რვა ლოკალში 10 გასაღების დანაკლისით შევიდა (2026-09-15). წითელი სტატუსის გამოსასწორებლად გამოიყენეთ
`node scripts/i18n/sync-ui-keys.mjs --locale=<codes> --translate-markers`; `extra` ბოლო დონის გასაღები
ნიშნავს, რომ წყაროდან ის წაიშალა — წაშალეთ იგი ლოკალიდან. `--warn` ანგარიშს წარადგენს მარცხის გარეშე.
`--catalog=cli` იმავე შედარებას `bin/cli/locales`-ზე ასრულებს (`npm run i18n:check-keys:cli`);
ორივე ნაბიჯი დავალება `i18n-ui-coverage`-შია.

#### `check-new-key-coverage` — ახალი გასაღებების i18n-ბარიერი

`check-ui-value-drift`-ის მონათესავე შემოწმება. ის აფიქსირებს შემთხვევას, როდესაც ინგლისური მნიშვნელობა **ხელახლა დაიწერა**,
ხოლო მისი თარგმანები უცვლელი დარჩა; ეს კი აფიქსირებს შემთხვევას, როდესაც ინგლისური გასაღები **დაემატა**,
მაგრამ ზოგიერთ ლოკალს ის საერთოდ არ მიუღია.

`check-ui-keys-coverage` ამ კლასის პრობლემას ვერ ხედავს: ის თითოეული ლოკალისთვის პროცენტულ მინიმალურ ზღვარს აწესებს, ხოლო
~13,000 ბოლო დონის გასაღებიდან თერთმეტის არარსებობის შემთხვევაშიც დაფარვა 99.9 %-ზე რჩება. თითოეული ენის პროცენტული მაჩვენებლით
ვერ გამოიხატება, რომ „ეს ფუნქცია უთარგმნელად გამოვიდა“ — ახალ ლოკალში მთელი ფუნქცია შეიძლება
ყოველგვარი ტექსტის გარეშე მოხვდეს ისე, რომ რიცხვი საერთოდ არ შეიცვალოს.

ინციდენტი, რომელსაც ეს შემოწმება ასახავს: Orchestration Canvas-ის მე-3 ფაზის თერთმეტივე გასაღები
იმ დროისთვის არსებულ 42 ლოკალზე ითარგმნა. რამდენიმე საათის შემდეგ ევროკავშირის ენების პაკეტმა (#13044) რეპოზიტორიაში
ლოკალების რაოდენობა 51-მდე გაზარდა, ხოლო ცხრა ახალ ლოკალს (`el`, `et`, `ga`, `hr`, `lt`, `lv`, `mt`, `sl`, `sr`) ისინი არასდროს
მიუღია. `deepMergeFallback` არარსებული გასაღების ნაცვლად ინგლისურ ტექსტს იყენებს, ამიტომ შედეგი
ცარიელი UI-ის ნაცვლად უთარგმნელი UI იყო — რეალური პრობლემა, რომელიც თავისი აგებულებით უხმაუროდ რჩებოდა.

მონათესავე შემოწმების მსგავსად, ისიც **diff-ის გათვალისწინებით მუშაობს** და შერწყმის საბაზისო წერტილში არსებულ ინგლისურ ტექსტს სამუშაო
ხეს ადარებს, ამიტომ მანამდე არსებული ხარვეზები გაყინული რჩება და ბარიერის ჩასართავად მიგრაცია საჭირო არ ყოფილა.

**`__MISSING__:<english>` მარკერი მოთხოვნას აღარ აკმაყოფილებს (2026-09-17-დან).** მანამდე ეს
დოკუმენტირებული გადავადების საშუალება იყო — შესრულების დროს სისტემა სწორ ინგლისურ ტექსტზე გადადიოდა — სანამ
2026-09-16-ს რვა ფუნქციურმა PR-მა 61 გასაღები არ დაამატა და თარგმნის ნაცვლად მარკერი 65-ვე ლოკალში არ ჩასვა:
ამ ბარიერმა ყოველი მათგანი მიიღო, PR-ები არაფერმა დაბლოკა, ხოლო რეალური თარგმანების თანაფარდობის დამბლოკავი ბარიერი
შემდეგ გამოშვების საბოლოო მდგომარეობაზე ყველასთვის ჩავარდა (pt-BR 3.2 % > 2.5 % + 0.5). მარკერი ახლა
არარსებულ თარგმანად ფასდება. წითელი სტატუსის გამოსასწორებლად გამოიყენეთ
`node scripts/i18n/sync-ui-keys.mjs --locale=<codes> --translate-markers --batch-size=40`, ან
ყველა ლოკალისთვის პარალელურად გაუშვით `npm run i18n:translate-new-keys` (`scripts/i18n/translate-new-keys.sh`,
გამოყოფილ რეჟიმში უსაფრთხოა და `OMNIROUTE_TRANSLATION_*` გარემოს ცვლადების გარეშე გაშვებაზე უარს ამბობს). გასაღები, რომელიც
აუცილებლად ინგლისურად უნდა დარჩეს (პროდუქტის/ძრავის/ალმის ფიქსირებული სახელი), უნდა მოთავსდეს `scripts/i18n/untranslatable-keys.json`-ში
და არასდროს დაიმალოს მარკერის მიღმა. `vi` მარკერებს სრულად კრძალავს (`tests/unit/i18n-vi-completeness.test.ts`).

#### `check-vitest-exclusions` — გადადებული ტესტების ბარიერი

`vitest.config.ts`-ის `exclude` სიაში მოთავსებული ფაილი არის ტესტი, რომელიც არ სრულდება, თუმცა
ხის წამკითხველისთვის დაფარვას ჰგავს. კომენტარის
`// #8618 — მანამდე არსებული მარცხი; გამოსწორების შემდეგ წაშალეთ ეს გამონაკლისი` მიღმა სამოცდაორი ფაილი დაგროვდა. საკითხი #8618
2026-08-11-ს დაიხურა, ხოლო სია, რომელსაც ის აკვირდებოდა, 45 ჩანაწერიდან 62-მდე გაიზარდა; ყოველ ახალ ჩანაწერს მემკვიდრეობით
ერგებოდა კომენტარი, რომელიც დახურულ საკითხზე მიუთითებდა. როდესაც სია საბოლოოდ ფაილების მიხედვით გაიზომა (#13204), **62-დან 51
მიმდინარე ხეზე წყაროს ყოველგვარი ცვლილების გარეშე წარმატებით სრულდებოდა**.

ბარიერი მოითხოვს, რომ ყოველი გამონაკლისი, რომელიც რეალურ ფაილზე მიუთითებს, (a) ასახელებდეს თვალის სადევნებელ საკითხს და
(b) დაფიქსირებული სტატუსით იყოს წარმოდგენილი `config/quality/vitest-exclusions.json`-ში, რათა ახლის დამატება
ცალკე ფაილში განსახილველი diff იყოს და არა კიდევ ერთი სტრიქონი 60-ჩანაწერიან მასივში. ის განზრახ
არ უშვებს გამორიცხულ ტესტებს ხელახლა — ამას ~10 წუთი სჭირდება და პერიოდულ დავალებას ეკუთვნის;
ინვენტარი აღრიცხავს, ბოლოს როდის გაიზომა თითოეული მათგანი.
