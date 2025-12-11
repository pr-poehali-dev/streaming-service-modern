import { useParams, useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

const Artist = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [playingId, setPlayingId] = useState<string | null>(null);

  const artistsData: Record<string, any> = {
    '1': {
      name: 'AURORA',
      genre: 'Indie Pop',
      followers: '2.4M',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800',
      matchScore: 95,
      color: 'from-blue-500 to-purple-600',
      bio: 'Норвежская певица и автор песен, известная своим эфирным голосом и атмосферной музыкой.',
      monthlyListeners: '8.2M',
      topCountries: ['Norway', 'USA', 'UK', 'Germany', 'France']
    },
    '2': {
      name: 'Дельфин',
      genre: 'Alternative',
      followers: '890K',
      image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800',
      matchScore: 88,
      color: 'from-cyan-500 to-blue-600',
      bio: 'Русский рок-музыкант, один из основателей российской альтернативной сцены 90-х.',
      monthlyListeners: '1.5M',
      topCountries: ['Russia', 'Ukraine', 'Belarus', 'Kazakhstan', 'Germany']
    },
    '3': {
      name: 'FKJ',
      genre: 'Electronic',
      followers: '1.8M',
      image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800',
      matchScore: 92,
      color: 'from-indigo-500 to-purple-600',
      bio: 'Французский мультиинструменталист, создающий электронную музыку с живыми инструментами.',
      monthlyListeners: '4.3M',
      topCountries: ['France', 'USA', 'UK', 'Brazil', 'Mexico']
    },
    '4': {
      name: 'Земфира',
      genre: 'Rock',
      followers: '1.2M',
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800',
      matchScore: 85,
      color: 'from-purple-500 to-pink-600',
      bio: 'Российская рок-певица, автор песен и продюсер, одна из самых влиятельных в русском роке.',
      monthlyListeners: '2.1M',
      topCountries: ['Russia', 'Ukraine', 'Belarus', 'Israel', 'USA']
    }
  };

  const artist = artistsData[id || '1'];

  const topTracks = [
    { id: '1', title: 'Runaway', plays: '142M', duration: '4:12', popularity: 98 },
    { id: '2', title: 'The Seed', plays: '89M', duration: '3:42', popularity: 94 },
    { id: '3', title: 'Running with the Wolves', plays: '76M', duration: '3:15', popularity: 91 },
    { id: '4', title: 'Queendom', plays: '65M', duration: '3:58', popularity: 88 },
    { id: '5', title: 'Animal', plays: '54M', duration: '3:34', popularity: 85 }
  ];

  const listeningStats = [
    { month: 'Янв', listeners: 6.8 },
    { month: 'Фев', listeners: 7.1 },
    { month: 'Мар', listeners: 7.5 },
    { month: 'Апр', listeners: 7.9 },
    { month: 'Май', listeners: 8.0 },
    { month: 'Июн', listeners: 8.2 }
  ];

  const similarArtists = [
    { id: '2', name: 'Sigur Rós', image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300', match: 82 },
    { id: '3', name: 'Florence + The Machine', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300', match: 79 },
    { id: '4', name: 'Of Monsters and Men', image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=300', match: 76 }
  ];

  const togglePlay = (trackId: string) => {
    setPlayingId(playingId === trackId ? null : trackId);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white pb-32">
      <div className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigate('/')}
                className="text-white/70 hover:text-white hover:bg-white/10"
              >
                <Icon name="ArrowLeft" size={20} />
              </Button>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0EA5E9] to-[#8B5CF6] flex items-center justify-center">
                  <Icon name="Waves" size={20} className="text-white" />
                </div>
                <h1 className="text-2xl font-bold">WaveStream</h1>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <Button variant="ghost" size="sm" className="text-white/70 hover:text-white hover:bg-white/10">
                <Icon name="Home" size={20} />
              </Button>
              <Button variant="ghost" size="sm" className="text-white/70 hover:text-white hover:bg-white/10">
                <Icon name="Search" size={20} />
              </Button>
              <Button variant="ghost" size="sm" className="text-white/70 hover:text-white hover:bg-white/10">
                <Icon name="Library" size={20} />
              </Button>
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#0EA5E9] to-[#8B5CF6] flex items-center justify-center">
                <Icon name="User" size={18} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-96 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${artist.color} opacity-60`}></div>
        <img
          src={artist.image}
          alt={artist.name}
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 container mx-auto px-6 pb-8">
          <Badge className="bg-[#0EA5E9] text-white border-0 mb-4">
            {artist.matchScore}% совпадение с вашим вкусом
          </Badge>
          <h1 className="text-6xl font-bold mb-4 animate-fade-in">{artist.name}</h1>
          <div className="flex items-center gap-6 text-white/80">
            <div className="flex items-center gap-2">
              <Icon name="Users" size={20} />
              <span>{artist.followers} подписчиков</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Headphones" size={20} />
              <span>{artist.monthlyListeners} слушателей в месяц</span>
            </div>
            <Badge className="bg-white/10 text-white border-0">{artist.genre}</Badge>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 pt-8">
        <div className="flex gap-4 mb-8">
          <Button className="bg-gradient-to-r from-[#0EA5E9] to-[#8B5CF6] hover:from-[#0EA5E9]/90 hover:to-[#8B5CF6]/90 text-white border-0 px-8 py-6 text-lg">
            <Icon name="Play" size={24} className="mr-2" />
            Слушать
          </Button>
          <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-6 py-6">
            <Icon name="Plus" size={20} className="mr-2" />
            Подписаться
          </Button>
          <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-6 py-6">
            <Icon name="Share2" size={20} />
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm p-6 mb-8 animate-fade-in">
              <h2 className="text-2xl font-bold mb-4">Об артисте</h2>
              <p className="text-white/70 mb-6">{artist.bio}</p>
              <div className="flex items-center gap-4">
                <Badge className="bg-gradient-to-r from-[#0EA5E9] to-[#8B5CF6] text-white border-0 px-3 py-1">
                  <Icon name="TrendingUp" size={14} className="mr-1" />
                  Trending
                </Badge>
                <span className="text-white/60 text-sm">Топ-5 в {artist.topCountries[0]}</span>
              </div>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm p-6 animate-fade-in" style={{ animationDelay: '100ms' }}>
              <h2 className="text-2xl font-bold mb-6">Популярные треки</h2>
              <div className="space-y-3">
                {topTracks.map((track, index) => (
                  <div
                    key={track.id}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-all group cursor-pointer"
                    onClick={() => togglePlay(track.id)}
                  >
                    <span className="text-white/40 text-sm w-6">{index + 1}</span>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{track.title}</h3>
                      <div className="flex items-center gap-3">
                        <span className="text-white/60 text-sm">{track.plays} прослушиваний</span>
                        <Progress value={track.popularity} className="w-24 h-1" />
                      </div>
                    </div>
                    <span className="text-white/40 text-sm mr-4">{track.duration}</span>
                    {playingId === track.id ? (
                      <Icon name="Pause" size={20} className="text-[#0EA5E9] animate-pulse-glow" />
                    ) : (
                      <Icon name="Play" size={20} className="text-white/40 group-hover:text-[#0EA5E9] transition-colors" />
                    )}
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm p-6 animate-fade-in" style={{ animationDelay: '200ms' }}>
              <h3 className="text-xl font-bold mb-4">Статистика прослушиваний</h3>
              <div className="space-y-4">
                {listeningStats.map((stat) => (
                  <div key={stat.month}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-white/60">{stat.month}</span>
                      <span className="text-[#0EA5E9]">{stat.listeners}M</span>
                    </div>
                    <Progress value={(stat.listeners / 8.2) * 100} className="h-2" />
                  </div>
                ))}
              </div>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm p-6 animate-fade-in" style={{ animationDelay: '300ms' }}>
              <h3 className="text-xl font-bold mb-4">Топ стран</h3>
              <div className="space-y-3">
                {artist.topCountries.map((country: string, index: number) => (
                  <div key={country} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-white/40 text-sm w-4">{index + 1}</span>
                      <span className="text-white/80">{country}</span>
                    </div>
                    <Progress value={100 - index * 15} className="w-20 h-1" />
                  </div>
                ))}
              </div>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm p-6 animate-fade-in" style={{ animationDelay: '400ms' }}>
              <h3 className="text-xl font-bold mb-4">Похожие артисты</h3>
              <div className="space-y-4">
                {similarArtists.map((similar) => (
                  <div key={similar.id} className="flex items-center gap-3 cursor-pointer hover:bg-white/5 p-2 rounded-lg transition-all group">
                    <img
                      src={similar.image}
                      alt={similar.name}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm">{similar.name}</h4>
                      <p className="text-white/60 text-xs">{similar.match}% совпадение</p>
                    </div>
                    <Icon name="ChevronRight" size={18} className="text-white/40 group-hover:text-white/70 transition-colors" />
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artist;
