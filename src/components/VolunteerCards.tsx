import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import VolunteerProfile from "@/components/VolunteerProfile";

interface Volunteer {
  id: string;
  name: string;
  specialization: string;
  experience: string;
  languages: string[];
  available: boolean;
  avatar: string;
  description: string;
  education: string;
  workingHours: string;
  successfulSessions: number;
  rating: number;
  specialties: string[];
  aboutMe: string;
  approach: string;
}

interface VolunteerCardsProps {
  onBack: () => void;
}

const VolunteerCards = ({ onBack }: VolunteerCardsProps) => {
  const [selectedVolunteer, setSelectedVolunteer] = useState<Volunteer | null>(
    null,
  );
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const volunteers: Volunteer[] = [
    {
      id: "1",
      name: "Анна С.",
      specialization: "Психологическая поддержка",
      experience: "5 лет",
      languages: ["Русский", "Английский"],
      available: true,
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=150&h=150&fit=crop&crop=face",
      description:
        "Специализируюсь на работе с тревожными расстройствами и стрессом",
      education: "МГУ, факультет психологии",
      workingHours: "Пн-Пт 9:00-18:00",
      successfulSessions: 342,
      rating: 4.9,
      specialties: ["Тревожность", "Стресс", "Панические атаки", "Самооценка"],
      aboutMe:
        "Я психолог с пятилетним опытом работы в области кризисной психологии. Помогаю людям справиться с тревожностью, стрессом и найти внутренние ресурсы для преодоления трудных жизненных ситуаций.",
      approach:
        "В работе использую когнитивно-поведенческую терапию и техники майндфулнес. Создаю безопасное пространство для открытого диалога и поддерживаю клиентов на пути к эмоциональному благополучию.",
    },
    {
      id: "2",
      name: "Михаил К.",
      specialization: "Кризисное консультирование",
      experience: "8 лет",
      languages: ["Русский"],
      available: true,
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      description: "Помогаю людям в кризисных ситуациях, работаю с депрессией",
      education: "СПбГУ, клиническая психология",
      workingHours: "Ежедневно 10:00-22:00",
      successfulSessions: 567,
      rating: 4.8,
      specialties: ["Депрессия", "Кризисы", "Суицидальные мысли", "Потери"],
      aboutMe:
        "Специализируюсь на кризисном консультировании и работе с депрессивными расстройствами. Имею сертификат кризисного психолога и опыт работы на телефоне доверия.",
      approach:
        "Использую экзистенциальный подход и техники поддерживающей терапии. Помогаю найти смысл в трудных ситуациях и восстановить веру в себя.",
    },
    {
      id: "3",
      name: "Елена В.",
      specialization: "Семейное консультирование",
      experience: "6 лет",
      languages: ["Русский", "Немецкий"],
      available: false,
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      description:
        "Работаю с семейными проблемами и межличностными отношениями",
      education: "МГППУ, семейная психология",
      workingHours: "Вт, Чт, Сб 14:00-20:00",
      successfulSessions: 289,
      rating: 4.7,
      specialties: [
        "Семейные конфликты",
        "Отношения",
        "Развод",
        "Воспитание детей",
      ],
      aboutMe:
        "Семейный психолог с опытом работы с парами и семьями. Помогаю восстановить доверие, улучшить коммуникацию и найти компромиссы в отношениях.",
      approach:
        "Применяю системную семейную терапию и техники эмоционально-фокусированной терапии. Работаю как с парами, так и с отдельными членами семьи.",
    },
    {
      id: "4",
      name: "Дмитрий Л.",
      specialization: "Подростковая психология",
      experience: "4 года",
      languages: ["Русский", "Английский"],
      available: true,
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      description: "Специализируюсь на работе с подростками и молодёжью",
      education: "РГПУ им. Герцена, возрастная психология",
      workingHours: "Пн, Ср, Пт 15:00-19:00",
      successfulSessions: 156,
      rating: 4.6,
      specialties: [
        "Подростковые кризисы",
        "Самоидентификация",
        "Буллинг",
        "Учебный стресс",
      ],
      aboutMe:
        "Работаю с подростками и молодыми людьми, помогаю справиться с возрастными кризисами, проблемами самоидентификации и социальной адаптации.",
      approach:
        "Использую игровую терапию, арт-терапию и когнитивно-поведенческие техники, адаптированные для работы с молодёжью.",
    },
  ];

  const handleViewProfile = (volunteer: Volunteer) => {
    setSelectedVolunteer(volunteer);
    setIsProfileOpen(true);
  };

  const handleSelectVolunteer = (volunteer: Volunteer) => {
    alert(`Вы выбрали волонтёра: ${volunteer.name}. Скоро с вами свяжутся!`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm p-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={onBack}
            className="flex items-center gap-2"
          >
            <Icon name="ArrowLeft" size={20} />
            Назад
          </Button>
          <h1 className="text-xl font-semibold text-gray-800">
            Наши волонтёры
          </h1>
          <div className="text-sm text-gray-500">
            {volunteers.filter((v) => v.available).length} онлайн
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto p-6">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Профессиональная поддержка
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Наши волонтёры — квалифицированные специалисты, готовые помочь вам в
            трудную минуту
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {volunteers.map((volunteer) => (
            <Card
              key={volunteer.id}
              className="p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="relative">
                  <img
                    src={volunteer.avatar}
                    alt={volunteer.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div
                    className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-white ${
                      volunteer.available ? "bg-green-500" : "bg-gray-400"
                    }`}
                  ></div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">
                    {volunteer.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {volunteer.specialization}
                  </p>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Icon name="Clock" size={16} />
                  <span>Опыт: {volunteer.experience}</span>
                </div>

                <div className="flex flex-wrap gap-1">
                  {volunteer.languages.map((lang) => (
                    <Badge key={lang} variant="secondary" className="text-xs">
                      {lang}
                    </Badge>
                  ))}
                </div>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {volunteer.description}
                </p>
              </div>

              <Button
                className="w-full"
                variant="outline"
                onClick={() => handleViewProfile(volunteer)}
              >
                <Icon name="User" size={16} className="mr-2" />
                Посмотреть анкету
              </Button>

              <Button
                className={`w-full mt-2 ${
                  volunteer.available
                    ? "bg-green-600 hover:bg-green-700 text-white"
                    : "bg-gray-200 text-gray-500 cursor-not-allowed"
                }`}
                disabled={!volunteer.available}
              >
                <Icon name="MessageCircle" size={16} className="mr-2" />
                {volunteer.available ? "Связаться" : "Не в сети"}
              </Button>
            </Card>
          ))}
        </div>

        <VolunteerProfile
          volunteer={selectedVolunteer}
          isOpen={isProfileOpen}
          onClose={() => setIsProfileOpen(false)}
          onSelect={handleSelectVolunteer}
        />

        <div className="mt-8 text-center">
          <Card className="p-6 bg-purple-50 border-purple-200">
            <Icon
              name="Shield"
              size={32}
              className="mx-auto mb-4 text-purple-600"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Безопасность и конфиденциальность
            </h3>
            <p className="text-sm text-gray-600">
              Все наши волонтёры прошли проверку и обучение. Ваши данные
              защищены и не передаются третьим лицам.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default VolunteerCards;
