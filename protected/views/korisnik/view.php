<?php
/* @var $this KorisnikController */
/* @var $model Korisnik */

$this->breadcrumbs=array(
	'Korisniks'=>array('index'),
	$model->idKorisnik,
);

$this->menu=array(
	array('label'=>'List Korisnik', 'url'=>array('index')),
	array('label'=>'Create Korisnik', 'url'=>array('create')),
	array('label'=>'Update Korisnik', 'url'=>array('update', 'id'=>$model->idKorisnik)),
	array('label'=>'Delete Korisnik', 'url'=>'#', 'linkOptions'=>array('submit'=>array('delete','id'=>$model->idKorisnik),'confirm'=>'Are you sure you want to delete this item?')),
	array('label'=>'Manage Korisnik', 'url'=>array('admin')),
);
?>

<h1>View Korisnik #<?php echo $model->idKorisnik; ?></h1>

<?php $this->widget('zii.widgets.CDetailView', array(
	'data'=>$model,
	'attributes'=>array(
		'idKorisnik',
		'korisnickoIme',
		'sifra',
		'email',
		'tip',
		'aktivan',
		'banovan',
	),
)); ?>
