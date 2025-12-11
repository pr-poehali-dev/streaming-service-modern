import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const navigate = useNavigate();
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [verifiedArtists, setVerifiedArtists] = useState<Set<string>>(new Set(['1', '2', '4']));

  const toggleVerification = (artistId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setVerifiedArtists(prev => {
      const newSet = new Set(prev);
      if (newSet.has(artistId)) {
        newSet.delete(artistId);
      } else {
        newSet.add(artistId);
      }
      return newSet;
    });
  };

  const artists = [
    {
      id: '1',
      name: 'AURORA',
      genre: 'Indie Pop',
      followers: '2.4M',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400',
      matchScore: 95,
      color: 'from-blue-500 to-purple-600'
    },
    {
      id: '2',
      name: 'Дельфин',
      genre: 'Alternative',
      followers: '890K',
      image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400',
      matchScore: 88,
      color: 'from-cyan-500 to-blue-600'
    },
    {
      id: '3',
      name: 'FKJ',
      genre: 'Electronic',
      followers: '1.8M',
      image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400',
      matchScore: 92,
      color: 'from-indigo-500 to-purple-600'
    },
    {
      id: '4',
      name: 'Земфира',
      genre: 'Rock',
      followers: '1.2M',
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400',
      matchScore: 85,
      color: 'from-purple-500 to-pink-600'
    }
  ];

  const playlists = [
    {
      id: '1',
      name: 'Ночной драйв',
      tracks: 42,
      duration: '2ч 38мин',
      cover: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400',
      mood: 'Расслабляющий'
    },
    {
      id: '2',
      name: 'Рабочий фокус',
      tracks: 68,
      duration: '4ч 12мин',
      cover: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400',
      mood: 'Продуктивный'
    },
    {
      id: '3',
      name: 'Утро в городе',
      tracks: 35,
      duration: '2ч 5мин',
      cover: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=400',
      mood: 'Энергичный'
    }
  ];

  const recommendations = [
    {
      id: '1',
      title: 'The Seed',
      artist: 'AURORA',
      album: 'A Different Kind of Human',
      duration: '3:42',
      reason: 'На основе ваших любимых треков',
      image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200'
    },
    {
      id: '2',
      title: 'Весна',
      artist: 'Дельфин',
      album: 'Юность',
      duration: '4:15',
      reason: 'Похоже на то, что вы слушали',
      image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=200'
    },
    {
      id: '3',
      title: 'Tadow',
      artist: 'FKJ & Masego',
      album: 'Single',
      duration: '3:32',
      reason: 'Совпадает с вашим настроением',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200'
    },
    {
      id: '4',
      title: 'Искала',
      artist: 'Земфира',
      album: 'Земфира',
      duration: '3:58',
      reason: 'Часто слушают похожие пользователи',
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=200'
    }
  ];

  const togglePlay = (id: string) => {
    setPlayingId(playingId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <div className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0EA5E9] to-[#8B5CF6] flex items-center justify-center">
                <Icon name="Waves" size={20} className="text-white" />
              </div>
              <h1 className="text-2xl font-bold">WaveStream</h1>
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

      <div className="container mx-auto px-6 pt-24 pb-12">
        <section className="mb-12 animate-fade-in">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">Персональная подборка</h2>
              <p className="text-white/60">Специально для вас на основе вашего вкуса</p>
            </div>
            <Badge className="bg-gradient-to-r from-[#0EA5E9] to-[#8B5CF6] text-white border-0 px-4 py-2">
              <Icon name="Sparkles" size={16} className="mr-2" />
              ИИ рекомендации
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {recommendations.map((track, index) => (
              <Card
                key={track.id}
                className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group cursor-pointer p-4"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => togglePlay(track.id)}
              >
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      src={track.image}
                      alt={track.title}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    {playingId === track.id ? (
                      <div className="absolute inset-0 bg-black/60 rounded-lg flex items-center justify-center">
                        <Icon name="Pause" size={24} className="text-[#0EA5E9] animate-pulse-glow" />
                      </div>
                    ) : (
                      <div className="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Icon name="Play" size={24} className="text-[#0EA5E9]" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">{track.title}</h3>
                    <p className="text-white/60 text-sm">{track.artist} • {track.album}</p>
                    <p className="text-[#0EA5E9] text-xs mt-1">{track.reason}</p>
                  </div>
                  <div className="text-white/40 text-sm">{track.duration}</div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12 animate-fade-in" style={{ animationDelay: '200ms' }}>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">Любимые артисты</h2>
              <p className="text-white/60">Ваши самые прослушиваемые исполнители</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {artists.map((artist, index) => (
              <Card
                key={artist.id}
                className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 overflow-hidden group cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => navigate(`/artist/${artist.id}`)}
              >
                <div className="relative h-48 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${artist.color} opacity-40`}></div>
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <button
                      onClick={(e) => toggleVerification(artist.id, e)}
                      className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-black/80 transition-all hover:scale-110"
                    >
                      {verifiedArtists.has(artist.id) ? (
                        <Icon name="Check" size={16} className="text-[#0EA5E9]" />
                      ) : (
                        <Icon name="Plus" size={16} className="text-white/60" />
                      )}
                    </button>
                  </div>
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-[#0EA5E9] text-white border-0">
                      {artist.matchScore}% совпадение
                    </Badge>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-bold text-xl">{artist.name}</h3>
                    {verifiedArtists.has(artist.id) && (
                      <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#0EA5E9] to-[#8B5CF6] flex items-center justify-center animate-scale-in">
                        <Icon name="Check" size={12} className="text-white" />
                      </div>
                    )}
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/60">{artist.genre}</span>
                    <div className="flex items-center gap-1 text-white/60">
                      <Icon name="Users" size={14} />
                      <span>{artist.followers}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="animate-fade-in" style={{ animationDelay: '400ms' }}>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">Ваши плейлисты</h2>
              <p className="text-white/60">Коллекции для любого настроения</p>
            </div>
            <Button className="bg-gradient-to-r from-[#0EA5E9] to-[#8B5CF6] hover:from-[#0EA5E9]/90 hover:to-[#8B5CF6]/90 text-white border-0">
              <Icon name="Plus" size={20} className="mr-2" />
              Создать плейлист
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {playlists.map((playlist, index) => (
              <Card
                key={playlist.id}
                className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 overflow-hidden group cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={playlist.cover}
                    alt={playlist.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <Badge className="bg-[#8B5CF6] text-white border-0 mb-2">
                      {playlist.mood}
                    </Badge>
                    <h3 className="font-bold text-xl mb-2">{playlist.name}</h3>
                    <div className="flex items-center gap-3 text-sm text-white/80">
                      <div className="flex items-center gap-1">
                        <Icon name="Music" size={14} />
                        <span>{playlist.tracks} треков</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Icon name="Clock" size={14} />
                        <span>{playlist.duration}</span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-[#0EA5E9] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                    <Icon name="Play" size={24} />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/95 to-transparent border-t border-white/10 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[#0EA5E9] to-[#8B5CF6] flex items-center justify-center">
                <Icon name="Music2" size={24} />
              </div>
              <div>
                <p className="font-semibold">Выберите трек</p>
                <p className="text-sm text-white/60">Начните слушать музыку</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="text-white/60 hover:text-white">
                <Icon name="Shuffle" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-white/60 hover:text-white">
                <Icon name="SkipBack" size={20} />
              </Button>
              <Button size="icon" className="w-12 h-12 rounded-full bg-gradient-to-r from-[#0EA5E9] to-[#8B5CF6] hover:from-[#0EA5E9]/90 hover:to-[#8B5CF6]/90">
                <Icon name="Play" size={24} />
              </Button>
              <Button variant="ghost" size="icon" className="text-white/60 hover:text-white">
                <Icon name="SkipForward" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-white/60 hover:text-white">
                <Icon name="Repeat" size={20} />
              </Button>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="text-white/60 hover:text-white">
                <Icon name="ListMusic" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-white/60 hover:text-white">
                <Icon name="Volume2" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;